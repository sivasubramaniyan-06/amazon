from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

@app.post("/api/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    # Dummy authentication logic for demonstration purposes
    # In a real application, you would verify against a database and generate a real JWT
    if request.username == "admin" and request.password == "password":
        return LoginResponse(access_token="fake-jwt-token")
    
    raise HTTPException(status_code=401, detail="Invalid username or password")
