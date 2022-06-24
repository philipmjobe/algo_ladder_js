// Find the largest product of any two numbers within a given array.

// Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

function largest(numArr) {
  let soFar = 0;
  let i = 0;
  while (i < numArr.length) {
    let j = 0;
    while (j < numArr.length) {
      if (i !== j) {
        if (numArr[i] * numArr[j] > soFar) {
          soFar = numArr[i] * numArr[j];
        }
      }
      j++;
    }
    i++;
  }
  return soFar;
}

console.log(largest([5, -2, 1, -9, -7, 2, 6]));
