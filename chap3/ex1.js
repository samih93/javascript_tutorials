
var n = parseInt(prompt("enter un nb entier"));


var resBinair = "";

while (n>0) { // or  n / 2 > 0

    console.log(n);

    var temp = n;

    n = Number(Math.floor(n / 2)); 7

    var rest = temp % 2; // 1

    resBinair = rest + resBinair;

}

console.log(resBinair);
