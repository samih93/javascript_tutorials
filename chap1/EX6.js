var num1 = prompt("num1 :");
var num2 = prompt("num2 :");



var sum = parseInt(num1) + parseInt(num2);


while (sum <= 100) {
    var num3 = prompt("previous sum =" + sum);
    sum += parseInt(num3);
}

console.log("final sum = " + sum);


