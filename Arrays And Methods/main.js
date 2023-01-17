let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2

let myfriend1 =[];
myfriend1.push(myFriends[num-num],myFriends[myFriends.length-num]);
myfriend1.push(myFriends[num- myfriend1.length]);
console.log(myfriend1); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "samih", "Gamal"];
friends.shift();
friends.pop();
// Write Your Code Here
console.log(friends); // ["Eman", "Osama"]



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
arrOne.reverse().unshift(arrTwo[arrTwo.length-1]);
arrTwo.pop();
arrOne.push(arrTwo.pop(),arrTwo.pop());

// Write One Single Line Of Code

console.log(arrOne); // ["Z", "X", "D", "C", "B", "A"]


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length].shift().slice(website.length).toUpperCase()); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


// Write 3 Solutions
// 1-
if(haystack.includes(needle))
console.log("found");
// 2- 
haystack.forEach((elment)=>
    elment==needle ?
    console.log("found"):"not found"
);

// 3- 
if(haystack.indexOf(needle)!=-1)
console.log("found");



let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr2.shift();
arr2.shift();
console.log(arr2.shift().toLowerCase()+arr1.pop().toLowerCase()+arr2.shift().toLowerCase()); // fxy