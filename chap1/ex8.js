var a = parseInt(prompt("Entree first number"));
var b = parseInt(prompt("Entrer second nb"));




var greater;
var lesser;

if (a > b) {
    greater = a;
    lesser = b;

}
else {
    greater = b;
    lesser = a;
}


while (greater % lesser != 0) {
    console.log(`${greater} % ${lesser} => ${greater % lesser}`);
    var temp = lesser;
    lesser = greater % lesser;
    greater = temp;



    console.log(`greather = ${greater}`);
    console.log(`lesser = ${lesser}`);
}


if (greater % lesser == 0) {

    console.log(`${greater} % ${lesser} => ${greater % lesser}`);
    console.log(`greather = ${greater}`);
    console.log(`lesser = ${lesser}`);


    console.log(`PGCD de (${a},${b}) =${lesser}`);
}


