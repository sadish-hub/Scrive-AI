from sklearn.metrics.pairwise import cosine_similarity
from openai import OpenAI
import numpy as np
import config

client = OpenAI(api_key=config.OPENAI_API)

def perform_vector_search(query_text, document_chunks):
    # Generate embedding for the query
    response = client.embeddings.create(
        input=query_text,
        model="text-embedding-ada-002"
    )
    query_embedding = np.array(response['data'][0]['embedding'])

    # Retrieve and compute similarity for each document
    similarities = []
    for doc in document_chunks:
        doc_vector = np.array(doc['vector_data'])
        similarity = cosine_similarity([query_embedding], [doc_vector])[0][0]
        similarities.append((doc['data'], similarity))
    
    # Sort by similarity score
    sorted_results = sorted(similarities, key=lambda x: x[1], reverse=True)
    return sorted_results
