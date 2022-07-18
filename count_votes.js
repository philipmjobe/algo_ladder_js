// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

// const input = ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"];

function count(arr) {
  let votesHash = {};
  arr.forEach(function () {
    let lowercaseVote = arr.toString().toLowerCase();

    if (votesHash[lowercaseVote]) {
      votesHash[lowercaseVote]++;
    } else {
      votesHash[lowercaseVote] === 1;
    }
  });
  votesHash;
}

console.log(
  count(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"])
);
