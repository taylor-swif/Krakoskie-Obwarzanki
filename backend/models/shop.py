from pydantic import BaseModel

class Shop(BaseModel):
    longitude: str # x coordinate
    latitude: str # y coordinate
    user_id: str # id of the seller
    flavors: str # enum variants separated by semicolons
    payment_methods: str = 0 # 0 - cash, 1 - card, 2 - cash and card