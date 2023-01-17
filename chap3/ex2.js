
var n = parseInt(prompt("enter un nb entier"));

var res = "";
var sum = 0;
for (var i = 1; i <= Math.floor(n / 2); i++) {

    if (n % i == 0) {
        res += i + ",";
        sum += i;
    }
}

if (sum == n) {
    console.log(`n  est parfait  == >${res}`);
}
else {
    console.log(`${n} nest pas parfait`);
}
