// // Write a function that returns whether a given number is a prime number.

// function prime(num) {
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   let count = 0;
//   if (num === 0) {
//     console.log("0 is not prime");
//   } else {
//     var i = 2;
//   }
//   while (i < num) {
//     if (num % i === 0) {
//       count += 1;
//     }
//     i += 1;
//   }
//   if (count > 1) {
//     console.log(`${num} is not a prime number`);
//   } else {
//     console.log(`${num} is a prime number`);
//   }
// }
// readline.question("Enter A Number", (num) => {
//   console.log(prime());
//   readline.close();
// });

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}
