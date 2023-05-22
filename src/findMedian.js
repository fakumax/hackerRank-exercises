export function findMedian(number) {
  //   let numeros = number.sort((a, b) => a - b);
  let numeross = [...number].sort();
  let median = numeross.length / 2;

  //   let resultado = numeross[median];
  //   console.log(resultado);
  const final = Math.floor(median);
  console.log(final);
  console.log(numeross);
  console.log(number);
}
