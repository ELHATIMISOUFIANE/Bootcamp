import psycopg2
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """Return a MenuItem object by its name, or None if not found"""
        try:
            conn = psycopg2.connect(
                dbname="restaurant_db",
                user="postgres",
                password="1234",
                host="localhost"
            )
            cur = conn.cursor()
            
            cur.execute("SELECT item_name, item_price FROM Menu_Article WHERE item_name = %s", (name,))
            item = cur.fetchone()
            
            conn.close()
            
            if item:
                return MenuItem(item[0], item[1])
            else:
                return None
        except Exception as e:
            print(f"Error while getting item by name: {e}")
            return None

    @classmethod
    def all_items(cls):
        """Return a list of all MenuItem objects in the database"""
        try:
            conn = psycopg2.connect(
                dbname="restaurant_db",
                user="postgres",
                password="1234",
                host="localhost"
            )
            cur = conn.cursor()
            
            cur.execute("SELECT item_name, item_price FROM Menu_Article ORDER BY item_name")
            items = cur.fetchall()
            
            conn.close()
            
            return [MenuItem(item[0], item[1]) for item in items]
        except Exception as e:
            print(f"Error while getting all items: {e}")
            return []
