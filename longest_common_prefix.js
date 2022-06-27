// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

function common(str1, str2) {
  let common = "";
  let i = 0;
  while ((str1[i] = str2[i])) {
    common += str1[i];
    i++;
  }
  return common;
}

console.log(common(["flower", "flow"]));
