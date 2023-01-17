let myfield = document.getElementById('txtnumber');
let myresult = document.querySelector('.result');

myfield.onchange = function () {
    var mynumber = myfield.value;
    var res = `${mynumber} USD Dollar = ${mynumber * 46000} Lebanase Pound`;
    myresult.innerHTML = res;
}

    // myfield.addEventListener('change', function (e) {
    //     var mynumber = myfield.value;
    //     var res = `${mynumber} USD Dollar = ${mynumber * 46000} Lebanase Pound`;
    //     myresult.innerHTML = res;
    // });



