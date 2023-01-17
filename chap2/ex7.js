var num1 = prompt("Enter num1");
var num2 = prompt("Enter num2");
var num3 = prompt("Enter num3");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Les valeurs saisies doivent être des valeurs numériques");
}
else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);


    var min;
    var max;


    var res = "";



    if (num1 < num2) {
        min = num1;
        max = num2;

    }
    else {
        min = num2;
        max = num1;
    }

    // 1 - max < num3  ? ==> min - first max - num3 
    if (max > num3) {
        res += max + " - " + `${min > num3 ? min + " - " + num3 : num3 + ' - ' + min}`;
    }
    // first max > num3  
    else {
        res += num3 + ' - ' + max + ' - ' + min;
    }


    console.log(res);


}