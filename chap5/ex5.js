function title(str) {

    var ar = str.split(' ');
    var res = "";
    ar.forEach((e) => {
        res += e[0].toString().toUpperCase() + e.substring(1).toLowerCase() + " ";
    });
    return res;
}

console.log(title("bonjour TOUT LE monde"));
