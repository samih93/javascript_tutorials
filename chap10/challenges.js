//

function f1(element) {

    var prixUnitairField = document.querySelector(`#${element.id}t2`);
    prixUnitairField.value = element.value;
    total();
}

function f4(element) {
    // get current row 
    var row = element.id.split('t')[0][1];

    var prixUnitairField = document.querySelector(`#s${row}t2`);
    console.log(prixUnitairField.value);
    var prixField = document.querySelector(`#s${row}t3`);
    console.log(`#s${row}t3`);
    prixField.value = element.value * prixUnitairField.value;
    total();
}

function total() {
    var prix1 = parseInt(document.querySelector('#s1t3').value);
    var prix2 = parseInt(document.querySelector('#s2t3').value);
    var prix3 = parseInt(document.querySelector('#s3t3').value);

    document.querySelector('#total').value = prix1 + prix2 + prix3;
}

function renderSelects() {
    var obj = {
        "15": 'java',
        "10": 'html',
        "20": 'web',
        "25": 'php',
    }
    var optionsData = "";
    Object.entries(obj).forEach(function (entry) {
        var [key, value] = entry; // desctruction syntax
        optionsData += `<option value=${key}>${value}</option>`;
    });
    document.querySelector('#s1').innerHTML = optionsData;
    document.querySelector('#s2').innerHTML = optionsData;
    document.querySelector('#s3').innerHTML = optionsData;
}

renderSelects();
