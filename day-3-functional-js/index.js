// ================================================
// DAY 3 – Functional JavaScript
// ================================================

// ------------------------------------------------
// 1. Higher-Order Functions
// ------------------------------------------------
// A higher-order function is a function that:
// - takes another function as an argument OR
// - returns a function

const numbers = [1, 2, 3, 4, 5];

// ------------------------------------------------
// 2. map() – Transforming Arrays
// ------------------------------------------------
// map() creates a new array by transforming each element

const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// ------------------------------------------------
// 3. filter() – Filtering Arrays
// ------------------------------------------------
// filter() creates a new array based on a condition

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// ------------------------------------------------
// 4. reduce() – Reducing to a Single Value
// ------------------------------------------------
// reduce() combines array elements into one value

const totalSum = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total Sum:", totalSum);

// ------------------------------------------------
// 5. Reusable Utility Functions
// ------------------------------------------------
// Utility functions are reusable and independent

const isOdd = num => num % 2 !== 0;
const double = num => num * 2;

const oddNumbers = numbers.filter(isOdd);
const doubledNumbers = numbers.map(double);

console.log("Odd Numbers:", oddNumbers);
console.log("Doubled Numbers:", doubledNumbers);

// ------------------------------------------------
// 6. Pure Functions
// ------------------------------------------------
// Pure function:
// - Same input → same output
// - No side effects (does not modify external state)

const add = (a, b) => a + b;
console.log("Pure Function Output:", add(3, 4));

// ❌ Impure Function Example
let count = 0;
const increment = () => {
  count++;
  return count;
};

// ✅ Refactored to Pure Function
const incrementPure = value => value + 1;
console.log("Pure Increment:", incrementPure(5));

// ------------------------------------------------
// Why This Matters in React
// ------------------------------------------------
// React relies heavily on:
// - map() for rendering lists
// - pure functions for state updates
// - immutability for performance
