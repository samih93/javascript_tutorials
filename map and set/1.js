let setOfnumber = new Set([10]);
setOfnumber.add(20).add(setOfnumber.size);
console.log(setOfnumber);

let [,,l]=setOfnumber
console.log(l);
// Needed Output
// Set(3) {10, 20, 2}
// 2