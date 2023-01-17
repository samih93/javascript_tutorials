var n = parseInt(prompt("Entrer un nombre"));
var diviseurDe_N = "";

for (var i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
        diviseurDe_N += `${i},`;
    }
}



if (diviseurDe_N != "") {
    console.log(`Diviseur de ${n}  = 1,${diviseurDe_N} ${n}`);
}
else {
    console.log(`Diviseur de ${n} = 1 , ${n} (premier)`);

}


