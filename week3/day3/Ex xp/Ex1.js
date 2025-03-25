function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  let numbers = [];

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i);
      sum += i;
    }
  }

  console.log(numbers.join(" "));
  console.log("Sum:", sum);
}

// Test cases
displayNumbersDivisible(); // Default divisor 23
displayNumbersDivisible(3);
displayNumbersDivisible(45);
