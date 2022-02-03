// Write a function that returns the reverse of a given string.

// Input: “abcde”
// Output: “edcba”

function reverse(str) {
  let i = 0;
  let result = "";
  while (i < str.length) {
    result = str[i] + result;
    i += 1;
  }
  return result;
}

console.log(reverse("abcde"));
