import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

if not MONGO_URL:
    raise ValueError("You must set the MONGO_URL environment variable")

client = MongoClient(MONGO_URL)
database = client["pretzelShop"]
collection = database["shops"]
users_collection = database["users"]
