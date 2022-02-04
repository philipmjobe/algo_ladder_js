// Given a string of words, write a function that returns a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

function reverseWords(str) {
  let reversedWords = "";
  str = str.split(" ");
  let i = str.length - 1;
  while (i >= 0) {
    reversedWords += str[i] + " ";
    i -= 1;
  }
  return reversedWords;
}
console.log(reverseWords("popcorn is so cool isn’t it yeah i thought so"));
