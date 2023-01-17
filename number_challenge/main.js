

var a =10;
var b ="20";
var c =80;



//console.log(++a + +b++ + +c++ - +a++);
/*
[++a] preincrement
[+] contcatenat 
 */


var d ="-100";
var e ="20";
var f =30;
var g =true;

//console.log(-d * e) ;// 2000
//console.log(+g +""+ Number(-d-f + f/(+e/++g))) ;// 173



var a = 1_00;
var b = 2_00.5;
var c = 1e2;
var d = 2.4;

//smallest number  and return integer 
console.log(Math.trunc(Math.min(a,b,c,d)));

// use a +d  one time to get 10000
console.log(Math.pow(a,Math.trunc(d)));

//Get Integer "2" from d in 4 method
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Number.parseInt(d));

// use variable b +d 
console.log();  // 66.67 => String
console.log();  // 67 => Number


