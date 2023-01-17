var age = prompt("entrer votre age");


if (!isNaN(age)) {
  if (age < 0) {
    console.log("ERROR");
  }
  else if (age < 18) {
    console.log("MINEUR");
  }
  else {
    console.log("MAJEUR");
  }
}
else {
  console.log("enter a valid age");
}
