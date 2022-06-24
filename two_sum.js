// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

function sums(nums) {
  let i = 0;
  let sumArr = [];
  while (i < nums.length) {
    let j = 0;
    while (j < nums.length) {
      if (i !== j) {
        if (nums[i] + nums[j] === 10) {
          sumArr.push(nums[i], nums[j]);
          return sumArr;
        }
      }
      j++;
    }
    i++;
  }
  return false;
}
console.log(sums([2, 5, 3, 1, 0, 7, 11]));
console.log(sums([1, 2, 3, 4, 5]));
