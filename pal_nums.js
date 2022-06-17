// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
function largestPalindrome() {
  var arr = [];
  for (var i = 999; i > 100; i--) {
    for (var j = 999; j > 100; j--) {
      var mul = j * i;
      if (isPalin(mul)) {
        arr.push(j * i);
      }
    }
  }

  return Math.max.apply(Math, arr);
}

function isPalin(i) {
  return i.toString() === i.toString().split("").reverse().join("");
}

console.log(largestPalindrome());
