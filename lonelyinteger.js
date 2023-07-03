function lonelyinteger(a) {
  // Write your code here

  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
      return a[i];
    }
  }
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
