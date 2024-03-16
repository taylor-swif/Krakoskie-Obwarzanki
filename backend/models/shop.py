from pydantic import BaseModel

class Shop(BaseModel):
    name: str # id of the seller
    longitude: float# x coordinate
    latitude: float # y coordinate
    flavors: list[str] # enum variants separated by semicolons
    card_payment: bool = False # 0 - cash, 1 - card, 2 - cash and card
