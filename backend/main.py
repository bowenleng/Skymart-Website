from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import openai

app = FastAPI()
openai.api_key = "YOUR_OPENAI_API_KEY"  #fix: Replace with your actual OpenAI API key

client = openai.OpenAI()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages="This is for sky box TBA, the user may ask questions in English or in Chinese" # fix: replace TBA with company details
)

# Enable CORS so your React frontend can access this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chat_history = []

def send_msg(msg):
    # Here you can implement your logic to send the message to the AI model
    # For now, we'll just append it to the chat history and return a dummy response
    chat_history.append({"role": "user", "content": msg})
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=chat_history
    )
    chat_history.append(response.choices[0].message)
    return response.choices[0].message

@app.get("/api/data")
def receive_data(msg: str):
    response = send_msg(msg)
    return {"response": response}

@app.get("/api/chat_history")
def get_history():
    return {"chat_history": chat_history}