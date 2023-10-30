
# Define a class called Menu that stores information about food menus. 
class Menu:
  def __init__(self, name, items, start_time, end_time):
    self.name = name
    self.items = items
    self.start_time = start_time
    self.end_time = end_time

  def __repr__(self):
    details = self.name + " available from " + str(self.start_time) + ":00 to " + str()
    details = self.name + " available from " + str(self.start_time) + ":00 to " + str(self.end_time) + ":00"
    return details

  def calculate_bill(self, purchased_items):
    total = 0
    for item in purchased_items:
      total += self.items[item]
    return total

# Define a class called Franchise that stores information about a restaurant.
class Franchise:
  def __init__(self, address, menus):
    self.address = address
    self.menus = menus
  
  def __repr__(self):
    return self.address

  def available_menus(self, time):
    available_menus = "Menus: "
    for menu in self.menus:
      if time >= menu.start_time and menu.end_time >= time:
        available_menus += menu.name + " "
    return available_menus

# Define a class called Business that stores information about a business that has multiple restaurant franchises.
class Business:
  def __init__(self, name, franchises):
    self.name = name
    self.franchises = franchises

# Create menus
brunch = Menu("Brunch",{
  'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50, 'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50
}, 11, 16)

early_bird = Menu("Early-bird",{
  'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00, 'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00,
}, 15, 18)

dinner = Menu("Dinner", {
  'crostini with eggplant caponata': 13.00, 'caesar salad': 16.00, 'pizza with quattro formaggi': 11.00, 'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00,
}, 17, 23)

kids = Menu("Kids",{
  'chicken nuggets': 6.50, 'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00
}, 11, 21)

# Print menus
print(kids)
print(brunch)
print(early_bird)
print(dinner)

# create restaurant franchises
flagship_store = Franchise("1232 West End Road",[brunch,kids,early_bird,dinner])
new_installment = Franchise("12 East Mulberry Street",[brunch,kids,early_bird,dinner])

# Primt available menus at 5pm
print(flagship_store.available_menus(17))

# Create business
business1 = Franchise("Basta Fazoolin' with my Heart",[flagship_store,new_installment])

# Create arepas menu
arepas_menu = Menu("Take a’ Arepa", {
  'arepa pabellon': 7.00, 'pernil arepa': 8.50, 'guayanes arepa': 8.00, 'jamon arepa': 7.50
}, 10, 20)

# Create arepas place restaurant franchise
arepas_place = Franchise("189 Fitzgerald Avenue",[arepas_menu])

# Create arepas business
business2 = Business("Take a' Arepa",[arepas_place])
