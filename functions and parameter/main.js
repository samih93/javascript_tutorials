function sayHello(theName, theGender) {
  console.log(theGender === "Male" ? `hello Mr ${theName}` : theGender === "Female" ? `hello Miss ${theName}` : `Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum, operation) {
  if (operation === undefined) {
    if (secondNum === undefined) {
      console.log("Second number not found");
    }
    else {
      console.log(firstNum + secondNum);
    }
  }
  else {
    switch (operation) {
      case 'add':
        console.log(firstNum + secondNum);
        break;
      case 'subtract':
        console.log(firstNum - secondNum);
        break;
      case 'multiply':
        console.log(firstNum * secondNum);
        break;
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600



function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");

  }
  else {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 12 * 4} Weeks`);
    console.log(`${theAge * 12 * 4 * 7} Days`);
    console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
    console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
    console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


function checkStatus(a, b, c) {

  var msg1 = "";
  var msg2 = "";
  var msg3 = "";

  msg1 = typeof a === "string" ? `hello ${a}` : typeof b === "string" ? `hello ${b}` : `hello ${c}`
  msg2 = typeof a === "number" ? `Your Age is  ${a}` : typeof b === "number" ? `Your Age is  ${b}` : `Your Age is  ${c}`



  msg3 = typeof a === "boolean" ? a === true ?
    "You are Available for hire" : "You are Not Available for hire" : typeof b === "boolean" ? b === true ?
      "You are Available for hire" : "You are Not Available for hire" : c === true ?
    "You are Available for hire" : "You are Not Available for hire";

  console.log(msg1 + ", " + msg2 + ", " + msg3);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


function createSelectBox(startYear, endYear) {
  document.write("<select>");

  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value=${i}>${i}</option>`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);




function multiply(...numbers) {
  let res = 1;
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number")
        continue;
      res *= Math.floor(numbers[i]);
    }
  }
  console.log(res);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000


