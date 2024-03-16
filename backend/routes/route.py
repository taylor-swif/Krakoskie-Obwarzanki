from fastapi import APIRouter
from models.shop import Shop
from config.database import collection
from schema.schemas import list_serial,filter_by_distance,filter_n_nearest
from bson import ObjectId

router = APIRouter()

@router.get("/")
async def get_all_shop():
    shops = list_serial(collection.find())
    return shops

@router.post("/")
async def post_shop(shop: Shop):
    print(shop)
    collection.insert_one(dict(shop))

@router.post("/shops/by_distance")
async def get_shops_by_dist(r : float,lat : float,long : float):
    localization = (float(lat),float(long))
    shops = filter_by_distance(collection.find(),localization,r)
    return shops

@router.post("/shops/by_number")
async def get_n_nearest_shops(n : int,lat : float,long : float):
    localization = (float(lat),float(long))
    shops = filter_n_nearest(collection.find(),localization,n)
    return shops