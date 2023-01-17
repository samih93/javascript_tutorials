var Fielddimension = document.querySelector('#dt');
var Fieldmin = document.querySelector('#vmin');
var Fieldmax = document.querySelector('#vmax');
var aff = document.querySelector('#aff');


var afficer = function () {


    var min = Math.ceil(Fieldmin.value);
    var max = Math.floor(Fieldmax.value);
    var nbofcolumn = 10;

    var nbofLigne = Math.floor(Fielddimension.value / nbofcolumn);

    var table = "<table>";

    for (i = 0; i < nbofLigne; i++) {
        table += "<tr>";
        for (j = 0; j < nbofcolumn; j++) {
            var random = Math.floor(Math.random() * (max - min + 1)) + min;

            table += `<td>${random}</td>`;

        }
        table += "</tr>";
    }

    table += "</table>";



    aff.innerHTML = table;


}

var mybutton = document.querySelector('input[type=button]');

mybutton.onmouseover = function () {
    mybutton.value = "Click Me";
    mybutton.style.cssText = "color: white;background-color:##074307";

};

mybutton.onmouseleave = function () {
    mybutton.value = "Générez un tableau";
    mybutton.style.cssText = "color: white;background-color:green";

};

// mybutton.ondblclick = function () {
//     mybutton.style.cssText = "color: white;background-color:yellow";
// }

mybutton.addEventListener('dblclick', function () {
    mybutton.style.cssText = "color: white;background-color:yellow";
});