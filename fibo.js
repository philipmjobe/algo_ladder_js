// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

function fibo(num) {
  let fib = [0, 1];
  if (num <= 2) {
    return fib[num - 1];
  }
  (num - 2).do;
  let i = fib.length;
  let arr1 = fib[i - 1];
  let arr2 = fib[i - 2];
  let arr3 = arr1 + arr2;
  fib.push(arr3);
  return fib, fib[num - 1];
}
console.log(fibo(200));
