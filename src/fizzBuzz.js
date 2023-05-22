/*
Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows: 

If i is a multiple of both 3 and 5, print FizzBuzz. 
If i is a multiple of 3 (but not 5), print Fizz. 

Complete the fizzBuzz function in the editor below. It should print each value on a separate line.

fizzBuzz has the following parameter(s): 

int n: the upper limit of values to test (inclusive)

Input Format 

The first line contains the integer, n.

Constraints 

0 < n < 2 x 10^5

 Output Format


*/
export function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
