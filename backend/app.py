from flask import Flask, jsonify, send_file, Response, request
import requests
from urllib.parse import unquote
import io
from flask_cors import CORS
from openai import OpenAI
import fitz
from couchbase.cluster import Cluster
from couchbase.auth import PasswordAuthenticator
from couchbase.options import ClusterOptions
from couchbase.collection import GetOptions
from couchbase.exceptions import DocumentNotFoundException
import config  # Assuming you have a config.py file with API keys

app = Flask(__name__)
client = OpenAI(api_key=config.OPENAI_API)

# Configure Couchbase connection
cluster = Cluster('couchbase://127.0.0.1', ClusterOptions(
    PasswordAuthenticator('Administrator', 'password')))  # Replace with your username and password
bucket = cluster.bucket('doc-process')
collection = bucket.default_collection()

# Enable CORS to allow cross-origin requests from the frontend
CORS(app, resources={r"/api/*": {"origins": "*"}})

HEADERS = {
        'Authorization': f'oauth_signature_method="PLAINTEXT",oauth_consumer_key="{config.API_TOKEN}",oauth_token="{config.ACCESS_TOKEN}",oauth_signature="{config.API_SECRET}&{config.ACCESS_SECRET}"'
    }

# Function to fetch documents from Scrive API
def get_scrive_documents(sort_field=None):
    url = f'{config.SCRIVE_API_BASE_URL}/documents/list'
    print(url)
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        # Filter the documents where file is not null
        documents = response.json().get('documents', [])
        filtered_documents = [doc for doc in documents if doc.get('file') is not None]
        # return filtered_documents

        # Sort the documents if sort_field is provided
        if sort_field:
            try:
                filtered_documents.sort(key=lambda x: x.get(sort_field.split('.')[0], {}).get(sort_field.split('.')[1], '') if '.' in sort_field else x.get(sort_field, ''))
            except KeyError:
                return {'error': f'Invalid sort field: {sort_field}'}

        return {'documents': filtered_documents, 'total_matching': len(filtered_documents)}
    else:
        return {'error': 'Failed to fetch documents', 'status_code': response.status_code}
    
# Function to fetch a single document by ID from Scrive API
def get_scrive_document_by_id(document_id):
    url = f'{config.SCRIVE_API_BASE_URL}/documents/{document_id}/get'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    else:
        return {'error': 'Failed to fetch document', 'status_code': response.status_code}
    
# function to get the file of a document from Scrive API
def get_scrive_document_file(document_id, file_id, file_name):
    
    url = f'{config.SCRIVE_API_BASE_URL}/documents/{document_id}/files/{file_id}/{file_name}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.content, response.status_code  # Use response.content to get the binary content
    else:
        return None, response.status_code
    
# # call the openai completions API by sending the user input along with the document blob
def call_openai_chat_completions_api(document_content, conversation_history):
    # openai.api_key = config.OPENAI_API
    client.api_key = config.OPENAI_API
    try:
        # Create a conversation format combining document content and user query
        messages = [
            {"role": "system", "content": "You are a helpful assistant.Consider yourself as a bot to check the document content and answer based on the question."},
            {"role": "user", "content": f"Document: {document_content}"},
        ]

        for message in conversation_history:
            messages.append(message)
        
        # Make the API request using the chat completions endpoint
        response = client.chat.completions.create(
            model="gpt-4o",  # Use the appropriate model name
            messages=messages,
            max_tokens=150,  # Limit the number of tokens in the response
            temperature=0.7, # Adjust for creativity (0.0 is more deterministic, 1.0 is more creative)
            top_p=1.0,       # Adjust for more deterministic responses
            frequency_penalty=0.0,  # Adjust to penalize new tokens based on their frequency
            presence_penalty=0.0     # Adjust to penalize new tokens based on their presence in the text
        )

        # Extract the AI's reply from the response
        return response.choices[0].message.content.strip()

    except Exception as e:
        return {"error": str(e)}
    
def get_text_from_pdf(response_content):
    pdf_document = fitz.open(stream=response_content, filetype="pdf")
    text = ""
    for page_num in range(len(pdf_document)):
        page = pdf_document.load_page(page_num)
        text += page.get_text()
    return text

    ##############################

# Route to get all documents
@app.route('/api/documents', methods=['GET'])
def documents():
    sort_field = request.args.get('sort_field')
    documents = get_scrive_documents(sort_field=sort_field)
    return jsonify(documents)

# Route to get a specific document by ID
@app.route('/api/documents/<int:document_id>', methods=['GET'])
def document_detail(document_id):
    document = get_scrive_document_by_id(document_id)
    return jsonify(document)

@app.route('/api/documents/<int:document_id>/<int:file_id>/<string:file_name>', methods=['GET'])
def document_get(document_id, file_id, file_name):
    decoded_file_name = unquote(file_name)
    document_content, status_code = get_scrive_document_file(document_id, file_id, decoded_file_name)
    if status_code == 200:
        return send_file(
            io.BytesIO(document_content),
            download_name=decoded_file_name,
            as_attachment=True
        )
    else:
        return Response(
            response=json.dumps({'error': 'Failed to fetch document'}),
            status=status_code,
            mimetype='application/json'
        )
    
@app.route('/api/documents/<int:document_id>/<int:file_id>/<string:file_name>/query', methods=['POST'])
def document_query(document_id, file_id, file_name):
    messages = request.json.get('messages', [])
    decoded_file_name = unquote(file_name)
    # print(messages)
    document_content, status_code = get_scrive_document_file(document_id, file_id, decoded_file_name)
    if status_code == 200:
        document_text = get_text_from_pdf(document_content)
        response_text = call_openai_chat_completions_api(document_text, messages)
        return jsonify({'response': response_text})
    else:
        return Response(
            response=json.dumps({'error': 'Failed to fetch document'}),
            status=status_code,
            mimetype='application/json'
        )
    

@app.route('/api/documents/<int:document_id>/<int:file_id>/<string:file_name>/query2', methods=['POST'])
def document_query(document_id, file_id, file_name):
    messages = request.json.get('messages', [])
    decoded_file_name = unquote(file_name)
    doc = check_doc_available(document_id, file_id, decoded_file_name)
    if(doc['exist']):
        document_text = doc['document']['chunks']
        response_text = call_openai_chat_completions_api(document_text, messages)
        return jsonify({'response': response_text})
    # print(messages)
    document_content, status_code = get_scrive_document_file(document_id, file_id, decoded_file_name)
    if status_code == 200:
        document_text = get_text_from_pdf(document_content)
        response_text = call_openai_chat_completions_api(document_text, messages)
        return jsonify({'response': response_text})
    else:
        return Response(
            response=json.dumps({'error': 'Failed to fetch document'}),
            status=status_code,
            mimetype='application/json'
        )
    
@app.route('/couch')
def index():
    # Sample query to fetch data from Couchbase
    query = 'SELECT * FROM `doc-process` LIMIT 10;'
    result = cluster.query(query)
    
    # Convert query result to list of dictionaries
    documents = [row for row in result]
    
    # Return result as JSON response
    return jsonify(documents)


# @app.route('/couch/check_insert', methods=['POST'])
def check_doc_available(document_id, file_id, file_name):
    # data = request.json
    # document_id = data.get('document_id')
    # file_id = data.get('file_id')
    # file_name = data.get('file_name')
    doc_key = f"{document_id}_{file_id}_{file_name}"

    try:
        # Check if the document exists
        doc = collection.get(doc_key)
        return jsonify({'exist': True, 'document': doc.content_as[dict]})
    except DocumentNotFoundException:
        # Insert the document if it doesn't exist
        # collection.insert(doc_key, data)
        return jsonify({'exist': False})
    
@app.route('/couch/get_document', methods=['GET'])
def get_document():
    document_id = request.args.get('document_id')
    file_id = request.args.get('file_id')
    file_name = request.args.get('file_name')
    doc_key = f"{document_id}_{file_id}_{file_name}"

    try:
        # Fetch the document
        doc = collection.get(doc_key)
        return jsonify(doc.content_as[dict])
    except DocumentNotFoundException:
        return jsonify({'error': 'Document not found'}), 404


if __name__ == '__main__':
    app.run(port=5000, debug=True)
