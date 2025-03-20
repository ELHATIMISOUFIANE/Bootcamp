from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    """Display the program menu and get user input"""
    print("\n==== Restaurant Menu Manager ====")
    print("(V) View an item")
    print("(A) Add an item")
    print("(D) Delete an item")
    print("(U) Update an item")
    print("(S) Show the restaurant menu")
    print("(Q) Quit")
    
    choice = input("\nPlease enter your choice: ").upper()
    return choice

def view_item():
    """View details of a specific menu item"""
    item_name = input("Enter the name of the item you want to view: ")
    item = MenuManager.get_by_name(item_name)
    
    if item:
        print(f"\nItem: {item.name}, Price: €{item.price}")
    else:
        print(f"\nItem '{item_name}' not found in the menu.")

def add_item_to_menu():
    """Add a new item to the restaurant menu"""
    name = input("Enter the name of the new item: ")
    
    # Validate price input
    while True:
        try:
            price = int(input("Enter the price of the new item (in euros): "))
            break
        except ValueError:
            print("Please enter a valid integer for the price.")
    
    item = MenuItem(name, price)
    if item.save():
        print(f"\nItem '{name}' was added successfully.")
    else:
        print(f"\nError: Item '{name}' could not be added. It might already exist.")

def remove_item_from_menu():
    """Remove an item from the restaurant menu"""
    name = input("Enter the name of the item you want to remove: ")
    
    item = MenuItem(name, 0)  # Price doesn't matter for deletion
    if item.delete():
        print(f"\nItem '{name}' was removed successfully.")
    else:
        print(f"\nError: Item '{name}' could not be removed. It might not exist.")

def update_item_from_menu():
    """Update an existing item in the restaurant menu"""
    current_name = input("Enter the name of the item you want to update: ")
    
    # Check if the item exists
    existing_item = MenuManager.get_by_name(current_name)
    if not existing_item:
        print(f"\nError: Item '{current_name}' not found in the menu.")
        return
    
    new_name = input("Enter the new name (leave empty to keep current): ")
    if not new_name:
        new_name = current_name
    
    # Validate price input
    while True:
        price_input = input(f"Enter the new price (leave empty to keep current: €{existing_item.price}): ")
        if not price_input:
            new_price = existing_item.price
            break
        try:
            new_price = int(price_input)
            break
        except ValueError:
            print("Please enter a valid integer for the price.")
    
    if existing_item.update(new_name, new_price):
        print(f"\nItem '{current_name}' was updated successfully to '{new_name}' with price €{new_price}.")
    else:
        print(f"\nError: Item '{current_name}' could not be updated.")

def show_restaurant_menu():
    """Display the full restaurant menu"""
    items = MenuManager.all_items()
    
    if not items:
        print("\nThe restaurant menu is currently empty.")
        return
    
    print("\n==== Restaurant Menu ====")
    print("-" * 30)
    print(f"{'ITEM':<20} {'PRICE (€)':<10}")
    print("-" * 30)
    
    for item in items:
        print(f"{item.name:<20} {item.price:<10}")
    print("-" * 30)

def main():
    """Main program loop"""
    while True:
        choice = show_user_menu()
        
        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'Q':
            print("\nThank you for using the Restaurant Menu Manager.")
            show_restaurant_menu()
            print("\nGoodbye!")
            break
        else:
            print("\nInvalid choice. Please try again.")

if __name__ == "__main__":
    main()
