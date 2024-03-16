from distance_calc import distance

def get_flavors(flavors):
    return flavors.split(';')


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
        "payment_methods" : shop["payment_methods"],
        "flavors": get_flavors(shop["flavors"])
    }
    
def list_serial(shops) -> list:
    list_of_dicts = [invidual_serial(shop) for shop in shops]
    dictionary = {}
    for shop in list_of_dicts:
        dictionary[shop["id"]] = (shop["latitude"],shop["longitude"]) 
    return dictionary

def filter_by_distance(shops,localization,radius = 5):
    return get_shops_data(shops,distance(list_serial(shops),localization,radius=radius))

def filter_n_nearest(shops,localization,n):
    return distance(list_serial(shops),localization,number_of_output=n)

def get_shops_data(list_of_shops,filtered_shops):
    data = [list_of_shops[key] for key in filtered_shops.keys()]
    return [{"id": key, "distance": filtered_shops[key],"name": shop } for key, shop in data.items()]
