function diagonalDifference(arr) {
  // Write your code here

  let diagonalA = 0;
  let diagonalB = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonalA += arr[i][i];
  }
  for (let i = 0; i < arr.length; i++) {
    diagonalB += arr[i][arr.length - 1 - i];
  }

  return Math.abs(diagonalA - diagonalB);
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
