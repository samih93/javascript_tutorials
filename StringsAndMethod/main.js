let userName = "Elzero";
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // e


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toLowerCase().startsWith(letterZ,2)); // True
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // True
