// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

function mesh(arr) {
  let pairs = [];
  let i = 0;
  while (i < arr.length) {
    let j = 0;
    while (j < arr.length) {
      if (i !== j) {
        pairs.push(arr[i] + arr[j]);
      }
      j++;
    }
    i++;
  }
  return pairs;
}

console.log(mesh(["a", "b", "c", "d"]));
