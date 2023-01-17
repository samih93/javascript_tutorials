var nbofseconds = parseInt(prompt("nb of seconds"));

var hours;
var minuts;
var seconds;
var rest;

if (nbofseconds / 3600 <= 24) {
  hours = Math.floor(nbofseconds / 3600); // 1 
  hours = hours < 10 ? "0" + hours : hours;

  rest = nbofseconds % 3600; // 400

  minuts = Math.floor(rest / 60);
  minuts = minuts < 10 ? "0" + minuts : minuts;

  seconds = rest % 60;


  var res = `${hours}:${minuts}:${seconds} ${hours >= 12 ? "PM" : "AM"}`;

  console.log(res);
}
else {
  console.log("ne pas une nb de seconds par jour");
}




