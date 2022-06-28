// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

function mostCommon(str) {
  let letterCount = {};
  let noSpaces = str.gsub(/\s+/, "");
  let i = 0;
  let mostCommonLetter = "";
  let mostCommonCount = 0;

  while (i < noSpaces.length) {
    if (letterCount[noSpaces[i]]) {
      letterCount[noSpaces[i]]++;
    } else {
      letterCount[noSpaces[i]] === 1;
    }

    if (letterCount[noSpaces[i]] > mostCommonCount) {
      mostCommonCount = letterCount[noSpaces[i]];
      mostCommonLetter = noSpaces[i];
    }
    i++;
  }
  mostCommonLetter;
}

console.log(mostCommon(“peter piper picked a peck of pickled peppers”))