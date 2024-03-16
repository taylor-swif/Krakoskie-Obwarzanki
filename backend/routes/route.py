from fastapi import APIRouter, HTTPException
from models.shop import Shop
from models.user import User
from config.database import collection, users_collection
from schema.schemas import list_serial,filter_by_distance,filter_n_nearest
from bson import ObjectId

router = APIRouter()

@router.get("/")

async def get_all_shops():
    shops = get_all_data(collection.find())
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


@router.post("/register")
async def register(user: User):
    try:
        user_doc = {"username": User.username, "password": User.password}
        result = users_collection.insert_one(user_doc)
        if result.inserted_id:
            return {"message": "User registered successfully"}
        else:
            raise HTTPException(status_code=500, detail="Failed to register user")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/login")
async def login(user: User):
    stored_user = users_collection.find_one({"username": user.username})
    if not stored_user or stored_user["password"] != user.password:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    return {"message": "Login successful"}

@router.get("/user/{username}")
async def get_user(username: str):
    user = users_collection.find_one({"username": username})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    print("User found successfully")
    return user

@router.get("/user/all")
async def get_all_user():
    users = list_serial(users_collection.find())
    return users

