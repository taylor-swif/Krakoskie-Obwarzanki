
from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel

app = FastAPI()

# MongoDB connection URL
MONGO_URL = "mongodb+srv://mongoconnect:123@cluster0.dxzzzjx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = AsyncIOMotorClient(MONGO_URL)
database = client["mydatabase"]
collection = database["items"]

class Item(BaseModel):
    id: str
    name: str
    description: str = None

@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    print(item)
    result = await collection.insert_one(item.dict())
    item.id = str(result.inserted_id)
    return item

@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: str):
    item = await collection.find_one({"_id": item_id})
    if item:
        return item
    raise HTTPException(status_code=404, detail="Item not found")

