from distance_calc import distance
from config.database import collection

# longitude: str # x coordinate
#     latitude: str # y coordinate
#     user_id: str # id of the seller
#     flavors: str # enum variants separated by semicolons
#     payment_methods: str = 0 # 0 - cash, 1 - card, 2 - cash and card

def invidual_serial(shop) -> dict:
    return {
        "id" : str(shop["_id"]),
        "name" : shop["name"],
        "longitude": float(shop["longitude"]),
        "latitude": float(shop["latitude"]),
        "card_payment" : shop["card_payment"],
        "flavors": shop["flavors"]
    }

def get_all_data(shops) -> list:
    return [invidual_serial(shop) for shop in shops]
     
def list_serial(shops) -> list:
    print(shops)
    list_of_dicts = [invidual_serial(shop) for shop in shops]
    dictionary = {}
    for shop in list_of_dicts:
        dictionary[shop["id"]] = (shop["latitude"],shop["longitude"]) 
    return dictionary

def filter_by_distance(shops,localization,radius = 5):
    return get_shops_data(distance(list_serial(shops),localization,radius=radius))

def filter_n_nearest(shops,localization,n):
    return get_shops_data(distance(list_serial(shops),localization,number_of_output=n))

def get_shop_by_id(id):
    all_shops = get_all_data(collection.find())
    for shop in all_shops:
        if shop["id"] == id:
            return shop

    return {}

def get_shops_data(filtered_shops):
    return [(get_shop_by_id(idi),distance) for idi,distance in filtered_shops]  