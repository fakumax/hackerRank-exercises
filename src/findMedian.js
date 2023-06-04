/*
La mediana es un concepto estadístico que representa el valor central en un conjunto de datos ordenados. Divide el conjunto de datos en dos partes iguales: una mitad contiene valores mayores o iguales a la mediana, y la otra mitad contiene valores menores o iguales a la mediana. En otras palabras, la mediana es el valor que se encuentra en el centro de un conjunto de datos ordenados.

Cuando el tamaño del conjunto de datos es impar, encontrar la mediana es sencillo, ya que solo se necesita seleccionar el valor del centro. Sin embargo, cuando el tamaño del conjunto de datos es par, hay dos valores en el centro y se necesita tomar su promedio para obtener la mediana.
*/

export function findMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  // const sorteds = [...numbers].sort();
  console.log(sorted);
  // console.log(sorteds);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
}
