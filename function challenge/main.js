function showDetails(a, b, c) {

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

showDetails(28, "samih", true);


