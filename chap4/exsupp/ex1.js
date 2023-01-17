function identique(tab1, tab2) {
  if (tab1.length != tab2.length)
    return false;

  for (let i = 0; i < tab1.length; i++) {
    if (tab1[i] != tab2[i])
      return false;
  }
  return true;
}

console.log(identique([1, 2, 3, 4], [1, 2, 4, 3])); // false
console.log(identique([1, 2, 3, 4], [1, 2, 3])); // false
console.log(identique([5, 8, 4, 2], [5, 8, 4, 2])); // true
