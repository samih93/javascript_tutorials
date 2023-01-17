var val = prompt("Enter range like 10-20");

var myrange = val.split('-');
var a = parseInt(myrange[0]);
var b = parseInt(myrange[1]);

var min = a < b ? a : b;
var max = a > b ? a : b

for (i = min; i <= max; i++) {
    document.write(`<div>${i}</div>`);
}