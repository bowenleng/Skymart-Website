from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import TOKEN_KEY
from pydantic import BaseModel

class ChatMessage(BaseModel):
    message: str

app = FastAPI()
#openai.api_key = TOKEN_KEY

#client = openai.OpenAI()
#response = client.chat.completions.create(
#    model="gpt-3.5-turbo",
#    messages="This is for sky box TBA, the user may ask questions in English or in Chinese" # fix: replace TBA with company details
#)

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
    response = "test response" #client.chat.completions.create(
    #    model="gpt-3.5-turbo",
    #    messages=chat_history
    #).choices[0].message
    chat_history.append([msg, response])
    return response

@app.get("/")
def root():
    return {"message": "Hello, World!"}

@app.post("/chat")
def receive_data(payload: ChatMessage):
    response = send_msg(payload.message)
    return {"response": response}

@app.get("/chat_history")
def get_history():
    return {"chat_history": chat_history}