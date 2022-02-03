// Write a function that returns the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

// Input: [1, 2, 3, 4]
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

function sum(arr) {
  let sum = arr[0];
  let i = 1;
  while (i < arr.length) {
    sum += arr[i];
    i += 1;
  }
  return sum;
}
console.log(sum([1, 2, 3, 4]));
