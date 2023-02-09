// 1 
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["samih", "ahmad", "damaj"]]; // outout  AMIH
console.log('######## 1 #########');

console.log(words[2][0].substring(1).toUpperCase());
console.log(words.pop().shift().substring(1).toUpperCase());




//2 
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
// outout   // ["Z", "X", "D", "C", "B", "A"]

console.log('######## 2 #########');

arrOne.reverse();
arrOne.unshift(arrTwo.pop());
arrOne.push(arrTwo.pop(),arrTwo.pop());
//arrOne.push(...arrTwo.reverse());
console.log(arrOne);



//3 
let myFriends = ["Ahmed", "Elham", "adnan", "Gamal"];
//myFriends.pop();
console.log('######## 3 #########');

console.log(myFriends.slice(0,3));
//output ["Ahmed", "Elham", "adnan"]


//4 
let tab =['Ahmed',"Elmih","Elham","dani","Samal","Ameer"];
// outout Samih
console.log('######## 4 #########');

console.log(tab[4].substring(0,3)+tab[1].substring(3));



console.log('######## 5 #########');

//5 comparison
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! (-50 >= +"-40")); // true
console.log( (10 <= - "-40")); // true
console.log(!  "10" != 10); // true
console.log(!( 20 < false)); // true


let a = 20;
let b = 30;
let c = 10;

 console.log(!(a > b) || !(a  ==  b) && !(a < c) && !(a == c)); // true


 // 6 


 
var title="samih";
var description="web developer";
var date="30/4";
// output  div contains all info 4 time without loop
var res = `<div>
<h2>${title}</h2>
<p>${description}</p>
<span>${date}</span></div>`;

document.write(res.repeat(4));


// 7

console.log('######## 7 #########');


let chosen = 3;

let students = [
  { title: "Tony", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Dani", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


switch(chosen)
{
    case 1 : [{title,age,available,skills:[,sk]},,] = students;
    break;
    case 2 : [,{title,age,available,skills:[,sk]},] = students;
    break;
    case 3 : [,,{title,age,available,skills:[,sk]}] = students;
    break;
    default:break;

}
//output print title and age for the selected student
console.log(title) ;
console.log(age) ;
console.log(available===true? "Available":"not Available") ;
console.log(sk) ; // must be last skill

//8 
console.log('######## 8 #########');

let sentance = "I love food code too Playing Much";
// using filter
// outout "I love food code too Much"
var array=  sentance.split(' ').filter(function(e){
    return e!="Playing";
}).join(' ');
console.log(array);

// 9 
console.log('######## 9 #########');

let mix = "A-13BS2ZX";
//output 194
// first method 
var res="";
for(var i=0;i<mix.length;i++)
{
    if(!isNaN(parseInt(mix[i])))
    res+= mix[i]*mix[i];
}
console.log(res);

// second method 
var hh = mix.split('').filter(function(e){
    return !isNaN(parseInt(e));
}).map(function(e){
    return e*e;
}).join('');
console.log(hh);


//10 

console.log('######## 10 #########');
let myString ="1,2,3,s,a,m,i,h,_,a,h,m,a,d,5,_,d,a,m,a,3,2,0,j";

//output samih ahmad damaj

console.log(myString.split(',').filter(function(e){
    return isNaN(e);
}).join('').split('_').join(' ')
);



//11
// OBJECT EXAMPLE
// create an attribute fulldetails to print  your details
console.log('######## 11 #########');

let member = {
    name:"SAMIH",
    age:29,
    country:"LEBANON",
    fullDetails : function(){
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
    }
  
};


console.log(member.name); // SAMIH
console.log(member.age); // 29
console.log(member.country); // LEBANON
console.log(member.fullDetails());
// My Name Is SAMIH, My Age Is 29, I Live in LEBANON



// for next !!!!!!

fetch('http://127.0.0.1:5500/api%20fetch/api_object.js').then((result)=>{
    let mydata = result.json();
return mydata}).then((d)=>{
    d.forEach((element)=>{
        let el = document.createElement('div');
        let title = document.createElement('h2');
        let description = document.createElement('p');
        let titletextnode = document.createTextNode(element['title']);
        let descriptiontextnode = document.createTextNode(element['description']);
        title.appendChild(titletextnode);
        description.appendChild(descriptiontextnode);

        el.appendChild(title);
        el.appendChild(description);
        document.body.appendChild(el);
    });
});
 