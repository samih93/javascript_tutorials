function difference(tab1, tab2) {
  if (identique(tab1, tab2) == true)
    return 0;
  var diff = 0;
  var a;
  if (tab1.length > tab2.length) {
    a = tab2.length;
    diff = (tab1.length - tab2.length);
  }
  else {
    a = tab1.length;
    diff = (tab2.length - tab1.length);
  }
  for (let i = 0; i < a; i++) {
    if (tab1[i] != tab2[i]) diff++;
  }
  return diff;
}


console.log(difference([1, 2, 3, 4], [1, 2, 4, 3])); //2 
console.log(difference([1, 3, 2, 4, 5], [1, 2, 3]));//4
console.log(difference([5, 8, 4, 2], [5, 8, 4, 2]));//0