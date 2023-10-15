from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from neo4j import GraphDatabase
from pydantic import BaseModel
import json



# for security reasons
# you can store your database information in a separate file

uri = "neo4j+s://04557a0d.databases.neo4j.io"
user = "neo4j"
password = "jgHIq6aQ18jSpxVa-pbQvWv_1GwB6kay6WwwY0SYut0"

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# The following API filters movies by their title's first letter, and it is case-sensitive.
# To use the API, you must provide the required parameter "letter"

# Test API url:
# http://127.0.0.1:8000/graph?letter=I
# http://127.0.0.1:8000/graph?letter=B

@app.get("/graph")
async def funcTest(address: str):
    result = []

    # connect to GDB
    driver = GraphDatabase.driver(uri, auth=(user, password))
    d_add = driver.get_server_info().address
    session = driver.session(database="neo4j")

    # replacing the quatation marks with single quotations
    address1 = address.replace('\'', '')
    # result.append(address1)
    
    # address1 = '0x8d08aad4b2bac2bb761ac4781cf62468c9ec47b4'
    # run query
    try:
        wallet_address = session.execute_read(
            get_from_address,
            address1
        )
        # result.append(wallet_address)
        for item in wallet_address:
            addressId = item[0]
            type = item[1]
            result.append({ "address_id":addressId,"type":type})
            # result.append({"from_address":from_address, "to_address":to_address})
    except:
        result.append("Error")

    # unless you created them using the with statement 
    # call the .close() method on all Driver and Session instances to release any resources still held by them.
    session.close()
    driver.close()

    return result


@app.get("/results")
async def funcTest(address: str):
    result = []

    # connect to GDB
    driver = GraphDatabase.driver(uri, auth=(user, password))
    d_add = driver.get_server_info().address
    session = driver.session(database="neo4j")

    # replacing the quatation marks with single quotations
    address1 = address.replace('\'', '')
    # result.append(address1)
    
    # address1 = '0x8d08aad4b2bac2bb761ac4781cf62468c9ec47b4'
    # run query
    try:
        wallet_address = session.execute_read(
            get_from_address,
            address1
        )
        # result.append(wallet_address)
        for item in wallet_address:
            addressId = item[0]
            type = item[1]
            result.append({ "address_id":addressId,"type":type})
            # result.append({"from_address":from_address, "to_address":to_address})
    except:
        result.append("Error")

    # unless you created them using the with statement 
    # call the .close() method on all Driver and Session instances to release any resources still held by them.
    session.close()
    driver.close()

    response_data = {"nodes": [], "links": []}

    # Assuming 'result' contains your original data
    for item in result:
        # Extract address_id and type from each item
        address_id = item.get("address_id", {})

        # Create a new node based on the address_id and type
        node = {
            "address_id": address_id,
        }

        # Append the node to the "nodes" list
        response_data["nodes"].append(node)

        # Check if "to_address" and "from_address" exist in address_id
        if "to_address" in address_id and "from_address" in address_id:
            # Create a link for the transaction from 'from_address' to 'to_address'
            link = {
                "source": address_id["from_address"],
                "target": address_id["to_address"]
            }

            # Append the link to the "links" list
            response_data["links"].append(link)

    with open("result.json", "w") as json_file:
        json.dump(response_data, json_file)

    # Return the modified JSON response
    return response_data



# wrap your cypher code here
def get_from_address(tx, get_from_address):
    result = tx.run("""
              
                  MATCH (n:nodes)-[rel:transaction]->(nodes)
                  WHERE n.addressId = $filter
                  RETURN properties(rel);

                    """, filter=get_from_address)
    
# MATCH (from:nodes {addressId: $filter})-[tx:transaction]->(to:nodes)
#                  RETURN tx.hash, tx.block_timestamp, $filter AS from, to.addressId AS to, tx.value, tx.transaction_fee
#                  UNION
#                  MATCH (from:nodes)-[tx:transaction]->(to:nodes {addressId: $filter})
#                  RETURN tx.hash, tx.block_timestamp, from.addressId AS from, $filter AS to, tx.value, tx.transaction_fee;
    # MATCH (n:nodes)-[rel:transactions]->(nodes)
    #              WHERE n.addressId = $filter
    #              RETURN properties(rel);
    # return a list of Record objects
    return list(result)  


# @app.get("/jsonData")
# async def funcTest():
#         jsonResult = {
#             "address": 'Address_id'
#         }

#         return jsonResult



# class Result(BaseModel):
#     name: str
#     description: str = None
#     price: float
#     tax: float = None

# @app.post("/results/", response_model=Result)
# def create_item(result: result):
#     return result