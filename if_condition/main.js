
// Test Case 1
//var num = 9; // "009"

// Test Case 2
//var num = 20; // "020"

// Test Case 3
//var num = 110; // "110"
var num = 9;

console.log(num<10?`00${num}`:num>10 && num <100? `0${num}`: num);



var num1 = 9;
var str = "9";
var str2 = "20";

// Output
// 1-
console.log(num1==str? "{num1} Is The Same Value As {str} ":"{num1} Is not The Same Value As {str}") ; //"{num1} Is The Same Value As {str}"
// 2-
var res2 = "" ;// "{num1} Is Not The Same Value Or The Same Type As {str2}"

if(num1==str)
{
    if(typeof num1=== typeof str)
    res2+= '{num1} Is The Same Value as {str} And the same type';
    else
    res2+= '{num1} Is The Same Value as {str} And not the same type';

   
    }
    else{
        if(typeof num1=== typeof str)
    res2+= '{num1} Is not The Same Value as {str} And the same type';
    else
    res2+= '{num1} Is Not The Same Value as {str} And not the same type';
    }
    console.log(res2);

// 3-

var res3 = "" ;// "{num1} Is Not The Same Value Or The Same Type As {str2}"
if(num1==str2)
{
    if(typeof num1=== typeof str2)
    res3+= '{num1} Is The Same Value as {str2} And the same type';
    else
    res3+= '{num1} Is The Same Value as {str2} And not the same type';

   
    }
    else{
        if(typeof num1=== typeof str2)
    res3+= '{num1} Is not The Same Value as {str2} And the same type';
    else
    res3+= '{num1} Is Not The Same Value as {str2} And not the same type';
    }
    console.log(res3);

// 4- 
// 3-

var res4 = "" ;// "{num1} Is Not The Same Value Or The Same Type As {str2}"
if(str==str2)
{
    if(typeof str=== typeof str2)
    res4+= '{str} Is The Same Value as {str2} And the same type';
    else
    res4+= '{str} Is The Same Value as {str2} And not the same type';

   
    }
    else{
        if(typeof str=== typeof str2)
    res4+= '{str} Is not The Same Value as {str2} And the same type';
    else
    res4+= '{str} Is Not The Same Value as {str2} And not the same type';
    }
    console.log(res4);




var num2 = 10;
var num3 = 30;
var num4 = "30";

// Needed Output
if(num4>num2 && typeof num4 != typeof num3) 
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number") ;

if(num4>num2 && num4 == num3 &&  typeof num4 != typeof num3) 
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");

if(num2!=num4 && typeof num2 != typeof num4 && typeof num3!=typeof num4)
console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");



// Edit What You Want Here

var num1 = 15;
var num2 = 10;
var num3 = 15;
var num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}