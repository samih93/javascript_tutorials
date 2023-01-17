let x = Math.floor((Math.random() * 100) + 1);

var n = parseInt(prompt(`Enter a value`));
var nbofSteps = 1;

while (n != x) {
    n = parseInt(prompt(n < x ? "cest moins" : "cest plus"));
    nbofSteps++;
}
if (n == x) {
    alert(`Bravo nb of tries ${nbofSteps} !!" la bonne réponse. est ${n}`)
}



