

let sentance = "I love food code too Playing Much";

let smallwords = sentance.split(" ").filter(function (element){
  return element !=="Playing";
}).join(" ");
console.log(smallwords);


let mix = "A13BS2ZX";
let res = mix.split('').filter(function(element){
  return !isNaN(parseInt(element));
 
}).map((element) => element*element).join('');
console.log(res);