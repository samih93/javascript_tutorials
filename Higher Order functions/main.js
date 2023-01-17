


let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newString = mix.map(function(element){
   return isNaN(parseInt(element))?element :"";
}).reduce(function(acc,current){
   return `${acc}${current}`;
});

console.log(newString); // Elzero

////////////////////////////////////////////////////////////

let myString = "EElllzzzzzzzeroo";

// Elzero
let temp="";
let new_string = myString.split('').filter(function(e,index,array){
  
 return array[index]!== array[index+1] ?e :"";
}).join('');

console.log(new_string);

///////////////////////////////////////////


let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let newArray = myArray.reduce(function(acc , current){
   
  return current.length<=1 ? `${acc}${current}` : acc+""+current.toString().split(',').join('');
})

console.log(newArray);

/////////////////////////////////////////////////

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let new_nums = numsAndStrings.filter(function(element){
   return !isNaN(parseInt(element));
}).map(function(element){
   return -element;
});

console.log(new_nums);

//////////////////////////////////

let nums = [2, 12, 11, 5, 10, 1, 99];
// 500
let sum = nums.reduce(function(acc,current){
   
   return current %2===0 ? acc*current : acc+current;
},1);
console.log(sum);

