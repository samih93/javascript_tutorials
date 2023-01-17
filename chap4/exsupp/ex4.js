function sansDuplication(tab) {
  let b = [];
  b[0] = tab[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] != b[b.length - 1])
      b.push(tab[i]);
  }
  return b;
}

var ar = new Set([1, 2, 2, 2, 3, 3, 4, 4, 5]);

console.log(ar); // Set(5) {1, 2, 3, 4, 5}
console.log([...ar]); //  [1, 2, 3, 4, 5]
