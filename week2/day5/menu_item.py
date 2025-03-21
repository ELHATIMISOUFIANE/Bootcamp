import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        """Save the menu item to the database"""
        try:
            conn = psycopg2.connect(
                dbname="restaurant_db",
                user="postgres",
                password="1234",
                host="localhost"
            )
            cur = conn.cursor()
            
            # Check if item already exists
            cur.execute("SELECT * FROM Menu_Article WHERE item_name = %s", (self.name,))
            if cur.fetchone() is not None:
                conn.close()
                return False
            
            # Insert new item
            cur.execute(
                "INSERT INTO Menu_Article (item_name, item_price) VALUES (%s, %s)",
                (self.name, self.price)
            )
            conn.commit()
            conn.close()
            return True
        except Exception as e:
            print(f"Error while saving: {e}")
            return False

    def delete(self):
        """Delete the menu item from the database"""
        try:
            conn = psycopg2.connect(
                dbname="restaurant_db",
                user="postgres",
                password="1234",
                host="localhost"
            )
            cur = conn.cursor()
            
            # Delete item if exists
            cur.execute("DELETE FROM Menu_Article WHERE item_name = %s", (self.name,))
            if cur.rowcount == 0:
                conn.close()
                return False
            
            conn.commit()
            conn.close()
            return True
        except Exception as e:
            print(f"Error while deleting: {e}")
            return False

    def update(self, new_name, new_price):
        """Update the menu item in the database"""
        try:
            conn = psycopg2.connect(
                dbname="restaurant_db",
                user="postgres",
                password="postgres",
                host="localhost"
            )
            cur = conn.cursor()
            
            # Update item if exists
            cur.execute(
                "UPDATE Menu_Article SET item_name = %s, item_price = %s WHERE item_name = %s",
                (new_name, new_price, self.name)
            )
            if cur.rowcount == 0:
                conn.close()
                return False
            
            # Update the object's attributes
            self.name = new_name
            self.price = new_price
            
            conn.commit()
            conn.close()
            return True
        except Exception as e:
            print(f"Error while updating: {e}")
            return False
