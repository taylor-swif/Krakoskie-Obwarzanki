def get_flavors(flavors):
    return flavors.split(';')


# longitude: str # x coordinate
#     latitude: str # y coordinate
#     user_id: str # id of the seller
#     flavors: str # enum variants separated by semicolons
#     payment_methods: str = 0 # 0 - cash, 1 - card, 2 - cash and card

def invidual_serial(shop) -> dict:
    return {
        "id" : str(shop["user_id"]),
        "longitude": float(shop["longitude"]),
        "latitude": float(shop["latitude"]),
        "payment_methods" : int(shop["payment_methods"]),
        "flavors": get_flavors(shop["flavors"])
    }
    
def list_serial(shops) -> list:
    return[invidual_serial(shop) for shop in shops]

