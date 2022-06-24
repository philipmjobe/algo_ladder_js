// Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

// Input :
// A : [1, 5, 8]
// B : [6, 9]

// Modified A : [1, 5, 6, 8, 9]

function merge(nums1, nums2) {
  // let longest = [];
  // if (nums1.length > nums2.length) {
  //   let longest = nums1.length;
  // } else {
  //   let longest = nums2.length;
  // }
  // console.log(longest);
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < longest || j < longest) {
    if (nums2[j] === nums2.last) {
      merged.push(nums2[j]);
      merged;
      break;
    }
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
      console.log("`index is #{i}`");
      console.log(merged);
    } else {
      merged.push(nums2[j]);
      j++;
      console.log("`index is #{j}`");
      console.log(merged);
    }
  }
  return merged;
}

console.log(merge([1, 5, 8], [6, 9]));
