// ex1 : 
function calculate(firstnumber , secondnumber ,operation)
{
  // your code here 
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


//////////////////////////////////////////////////////////////////////////


// ex2 : 
function ageInTime(theAge) {
 // your code here 
}

// Needed Output
ageInTime(9); // Age Out Of Range
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//////////////////////////////////////////////////////////////////////////////


//ex3 : ...numbers ==> u can add many parameters  and u can catch them by looping on numbers 
// example multiply(2,3,4) ==> numbers.lenght = 3 so u can loop on numbers and catch each parameter
function multiply(...numbers) /// 
{
 
}
 
// Needed Output
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000


//ex4 :  

function createSelectBox(startyear, endyear)
{
  //your code here to create a select box contains year between start and end year

}
// createSelectBox(2000, 2021);
// createSelectBox(1990, 2000);
