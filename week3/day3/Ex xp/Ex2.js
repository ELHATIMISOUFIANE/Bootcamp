const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (const item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1; // Bonus: decrease stock
    }
  }

  return total;
}

console.log(myBill());
console.log(stock); // Verify stock decreased
