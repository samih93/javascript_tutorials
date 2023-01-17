let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(chars.copyWithin(3));

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


let chars1 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

console.log(chars1.copyWithin(3,4,6).copyWithin(4));
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars3.copyWithin(2));

// Needed Output
//["Z", "Y", "Z", "Y", "A", "D", "E"]

let chars4 = [10, 15, 6, "A", "B", "C", "D", "E"];
console.log(chars4.copyWithin(0,3,6));

//let chars = ["A", "B", "C", "A", "B", "C", "D", "E"];
