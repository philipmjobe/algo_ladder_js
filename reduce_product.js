// Write a function that accepts an array of numbers and returns the product of all the numbers.

// Input: [1, 2, 3, 4]
// Output: 24

// Explanation: (1 x 2 x 3 x 4) = 24

function reduceProduct(arr) {
  let product = arr[0];
  let i = 0;
  while (i < arr.length) {
    product *= arr[i];
    i += 1;
  }
  return product;
}

console.log(reduceProduct([1, 2, 3, 4]));
