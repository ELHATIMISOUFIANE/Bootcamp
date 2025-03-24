let age = [20, 5, 12, 43, 98, 55];

// 1. Somme des âges
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log(sum); // 233

// 2. Âge maximum
let max = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}
console.log(max); // 98
