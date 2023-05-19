export function diagonalDifference(arr) {
  // Write your code here
  let suma = 0;
  let resta = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i][j]);
      if (i === j) {
        suma += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        resta += arr[i][j];
      }
    }
  }
  return Math.abs(suma - resta);
}
