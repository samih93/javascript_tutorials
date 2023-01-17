let theNumber = 100020003000;

let newset = Array.from(new Set([...theNumber.toString()])).filter(function(element){
  return element>true-true;
}).join('');
console.log(newset);
// Needed Output
//123