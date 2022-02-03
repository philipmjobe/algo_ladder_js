// Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

let numbers = [4, 2, 5, 99, -4];
let doubled = numbers.map((item) => item * 2);
console.log(doubled);
