from pymongo import MongoClient

MONGO_URL = "mongodb+srv://mongoconnect:123@cluster0.dxzzzjx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URL)
database = client.shop
collection = database["shops"]
users_collection = database["users"]
