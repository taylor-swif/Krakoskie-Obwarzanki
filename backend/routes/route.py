from fastapi import APIRouter, HTTPException
from models.shop import Shop
from models.user import User
from config.database import collection, users_collection
from schema.schemas import list_serial,filter_by_distance,filter_n_nearest,get_all_data
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


@router.post("/users/register")
async def register(user: User):
    try:
        # Check if the username already exists
        existing_user = users_collection.find_one({"username": user.username})
        if existing_user:
            raise HTTPException(status_code=400, detail="Username already exists")
        # Insert the new user into the database
        user_doc = {"username": user.username, "password": user.password}
        users_collection.insert_one(user_doc)
        # Return success message
        return {"message": "User registered successfully"}
    except Exception as e:
        # Log the error for debugging purposes
        print(f"Error during registration: {e}")
        # Raise HTTPException with 500 status code
        raise HTTPException(status_code=500, detail="Internal Server Error")
    
@router.post("/users/login")
async def login(user: User):
    stored_user = users_collection.find_one({"username": user.username})
    if not stored_user or stored_user["password"] != user.password:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    return {"message": "Login successful"}
