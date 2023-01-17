var num1 = prompt("Enter num1");
var num2 = prompt("Enter num2");
var num3 = prompt("Enter num3");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Les valeurs saisies doivent etre des valeurs numeriques");
}
else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    var max;

    // first solution
    if (num1 > num2) {
        max = num1;
    }
    else {
        max = num2;
    }

    if (max < num3) {
        max = num3;
    }

    // second solution
    // // get first max from frist two number 
    // max = num1 > num2  ? num1 : num2;

    // // compare current max wiht num3 and return the max 
    // max = max > num3 ? max : num3;

    //third solution
    // max = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3

    console.log(max);
}