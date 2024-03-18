from pydantic import BaseModel, Field


class Shop(BaseModel):
    name: str
    longitude: float
    latitude: float
    flavors: list[str]
    card_payment: bool = False
    time: list[int]
    startTime: str
    endTime: str
