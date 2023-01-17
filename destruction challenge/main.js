<<<<<<< HEAD
/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


switch(chosen)
{
    case 1:
         [{title,age,available, skills:[,sk]},,] = myFriends;
      
    break;
    case 2 : 
     [,{title,age,available, skills:[,sk]},] = myFriends;
    break;
    case 3 :
        [,,{title,age,available, skills:[,sk]}] = myFriends;

        break;
    default :break;
}

console.log(title) ;
console.log(age) ;
console.log(available===true? "Available":"not Available") ;
console.log(sk) ;
=======

let myfriends = ['ahmad','sayed','ali',['shady','amr',['mohamad','gamal']]];

let [,,,[a,,[,b]]]= myfriends;

console.log(a) ;// shady
console.log(b) ;// gamal
>>>>>>> 14b49f94ec8e13037a96bf586f3a7a4ff16a0d3c
