from flask import Flask, jsonify, request
import requests
from config import API_KEY, BASE_URL

app = Flask(__name__)


headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

@app.route('/documents', methods=['GET'])
def list_documents():
    response = requests.get(f'{BASE_URL}documents/list', headers=headers)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
