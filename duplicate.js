// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

function dup(str) {
  let j = 0;
  let i = 1;
  while (j < str.length) {
    let dup = str[j];
    while (i < str.length) {
      if (str[i] === dup) {
        return dup;
      }
      i += 1;
    }
    j += 1;
    i = j + 1;
  }
  return false;
}

console.log(dup("abcdefghhijkkloooop"));
