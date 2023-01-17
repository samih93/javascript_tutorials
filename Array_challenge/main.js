let zero = 0;
let counter = 3;
let my =['Ahmed',"Mazero","Elham","Osama","Gamal","Ameer"];;

my = my.reverse().slice(2);

console.log(my); // [Osama,Elham,Mazero,Ahmed]
console.log(my.slice(2)) ;// [Elham,Mazero]
console.log(`El${my[2].slice(2)}`); // Elzero
console.log(my[2].slice(4,5)+my[2].slice(5,6).toUpperCase()); // rO
