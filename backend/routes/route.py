from fastapi import APIRouter
from models.shop import Shop
from config.database import collection
from schema.schemas import list_serial
from bson import ObjectId

router = APIRouter()

@router.get("/")
async def get_shop():
    shops = list_serial(collection.find())
    return shops

@router.post("/")
async def post_shop(shop: Shop):
    print(shop)
    collection.insert_one(dict(shop))