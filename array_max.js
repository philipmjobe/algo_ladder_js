// Write a function that returns the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12]
// Output: 20

function max(arr) {
  let max = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i += 1;
  }
  return max;
}

console.log(max([5, 17, -4, 20, 12]));
