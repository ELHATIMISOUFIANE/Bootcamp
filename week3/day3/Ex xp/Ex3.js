function changeEnough(itemPrice, amountOfChange) {
  const values = [0.25, 0.1, 0.05, 0.01];
  let totalChange = 0;

  for (let i = 0; i < 4; i++) {
    totalChange += values[i] * amountOfChange[i];
  }

  return totalChange >= itemPrice;
}

// Test cases
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true
