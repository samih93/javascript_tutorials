// 10-15

// 10
// 11
// 12
// 13
// 14
// 15


// 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

let range = prompt('“Print Number From – To”');

let nbs = range !== null ? range.split('-') : null;
let nb1 = nbs != null ? nbs[0] : 0;
let nb2 = nbs != null ? nbs[1] : 0;

var max = nb1 > nb2 ? nb1 : nb2;
var min = nb1 < nb2 ? nb1 : nb2
for (let i = min; i <= max; i++) {
    document.write(`<div>${i}</div>`);
}
