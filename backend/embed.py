from openai import OpenAI
import numpy as np
import json
from json import JSONEncoder
import config

# Set up OpenAI API key
client = OpenAI(api_key=config.OPENAI_API)

class NumpyEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

def embed_with_openai(text_chunks):
    embedded_chunks = []
    
    for chunk in text_chunks:
        response = client.embeddings.create(
            input=chunk.page_content,
            model="text-embedding-ada-002"  # Choose an appropriate model
        )
        emb = response['data'][0]['embedding']
        embedding = np.array(emb)
        
        json_dump = json.dumps(embedding, cls=NumpyEncoder)
        embedded_chunk = {
            "data": str(chunk.page_content),
            "vector_data": json.loads(json_dump)
        }
        embedded_chunks.append(embedded_chunk)
    
    return embedded_chunks
