/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 
6 places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  10^-4 are acceptable

Example
arr=[1,1,0,-1,-1]

There are n=5  elements, two positive, two negative and one zero. Their ratios are 2/5=0.400000, 2/5= 0.400000  and 1/5=0.200000. 

Results are printed as:
0.400000
0.400000
0.200000

INPUT
[ -4, 3, -9, 0, 4, 1 ]

Expected Output
0.500000
0.333333
0.166667



*/

export default function plusMinus(arr) {
  let numeros = arr.length;
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;
  arr.map((item) => {
    if (item > 0) {
      positivos++;
    }
    if (item < 0) {
      negativos++;
    }
    if (item === 0) {
      ceros++;
    }
    return {
      positivos,
      negativos,
      ceros,
    };
  });
  const positiveResult = (positivos / numeros).toFixed(numeros);
  const negativeResult = (negativos / numeros).toFixed(numeros);
  const ceroResult = (ceros / numeros).toFixed(numeros);
  //   console.log('positivos', positivos);
  //   console.log('negativos', negativos);
  //   console.log('ceros', ceros);
  console.log(positiveResult);
  console.log(negativeResult);
  console.log(ceroResult);
}
