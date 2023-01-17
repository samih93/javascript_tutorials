let a = "Elzero web hello  school";

console.log(a.slice(2,6).charAt(0).toUpperCase()+a.slice(3,6)); // Zero

console.log(a.slice(-4,-3).toUpperCase().repeat(8))// HHHHHHHH

console.log(a.split(" ",1)) ;// [Elzero]
console.log(a.substr(0,6) +" "+a.substr(11)) ;// Elzero school
console.log(a.substring(0,6) +" "+a.substr(11)) ;// Elzero school

console.log(a.slice(0,1).toLocaleLowerCase()+a.slice(1,a.length-1).toUpperCase()+a.slice(a.length-1).toLowerCase()); //eLZERO WEB SCHOOl