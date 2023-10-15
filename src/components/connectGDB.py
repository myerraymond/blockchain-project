from neo4j import GraphDatabase


class GraphDB:

    def __init__(self):

        # uri = "neo4j+ssc://ace82f27.databases.neo4j.io"
        # user = "neo4j"
        # password = "mQCyvQKxN7wiCo4lRFklFr1_IG3_Yv_fuBUtCp1u6A8"

        uri = "neo4j+s://e484cc18.databases.neo4j.io"
        user = "neo4j"
        password = "WYix3zU2QOFuTWM1pquJxlxOwtCRa-DakuZVSDYnVP4"

        self.driver = GraphDatabase.driver(uri, auth=(user, password))
        print("Neo4j GDB address:", self.driver.get_server_info().address)

    def close(self):
        self.driver.close()


if __name__ == "__main__":
    GDB = GraphDB()
    GDB.close()
