var tab = [30, 40, 13, 25, 4, 7, 20];


console.log(maxofArray(tab));
console.log(maxofArray(tab));
console.log(maxofArray(tab));


// tab[2] = 13 

// loop 
// 1 -  sum of array
var sum = 0;
tab.forEach((element) => {
    sum += element;
});

sum = 0;
for (i = 0; i < tab.length; i++) {
    sum += tab[i];   // tab[7]
    console.log(tab[i]);
}
console.log(tab);


console.log('sum ' + sum);

// console.log('---------');
// // 2-
// for (var item of tab) {
//     console.log(item);
// }

// console.log('---------');
// //3-
// for (var index in tab) {
//     console.log(tab[index]);
// }


// console.log('---------');

// // 4-   max of array

function maxofArray(array) {

    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max <= array[i])
            max = array[i];

    }
    return max;
}

// function sumOfArray(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (!isNaN(array[i]))
//             sum += array[i];

//     }
//     return sum;
// }


// var tab1 = [30, 14, 2, 50, 4, 7, 20, 30, 40, 100];
// tab1[2] = "samih";

// console.log(tab1);

// var a = 2;

// console.log("max of array " + maxofArray(tab));
// console.log("max of array 1  " + maxofArray(tab1));
// console.log("max of a   " + maxofArray(a));  // undefiend


// var x = ["samih", 10, "damaj", 20, 4, 5, "elie"];

// var max_x = 0;

// // 1 method
// // x = x.map((element) => {
// //     return !isNaN(element) ? element : 0;
// // });

// console.log(x);
// console.log(sumOfArray(x));


// var jour = ["monday", "tuestday"];

// jour.unshift("sunday", "sasd", 1); // ['sunday', 'sasd', 1, 'monday','tuestday']
// console.log(jour);

// var lenght = jour.push("thursday", "friday"); // ['sunday', 'sasd', 1, 'monday,tuestday', 'thursday', 'friday']
// console.log("lenght " + lenght);

// console.log(jour);

// console.log(jour.pop());
// console.log(jour);

// console.log(jour.shift());
// console.log(jour);





// function sayHello(name, gendar) {
//     return gendar == "Male" ? `hello Mr ${name}` : gendar == "Female" ? `hello Miss ${name}` : `hello ${name}`;
// }

// // Needed Output
// console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
// console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
// console.log(sayHello("Sameh")); // "Hello Sameh"



