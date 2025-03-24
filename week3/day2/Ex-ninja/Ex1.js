// Create person objects with BMI method
const person1 = {
  fullName: "John Doe",
  mass: 75, // in kg
  height: 1.75, // in meters
  calculateBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const person2 = {
  fullName: "Jane Smith",
  mass: 68,
  height: 1.65,
  calculateBMI: function () {
    return this.mass / this.height ** 2;
  },
};

// Function to compare BMIs
function compareBMI(personA, personB) {
  const bmi1 = personA.calculateBMI();
  const bmi2 = personB.calculateBMI();

  if (bmi1 > bmi2) {
    console.log(`${personA.fullName} has a higher BMI of ${bmi1.toFixed(2)}`);
  } else if (bmi2 > bmi1) {
    console.log(`${personB.fullName} has a higher BMI of ${bmi2.toFixed(2)}`);
  } else {
    console.log("Both have the same BMI");
  }
}

// Execute comparison
compareBMI(person1, person2);
