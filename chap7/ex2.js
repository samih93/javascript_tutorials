

// CIVIC IS A DND TOOT 

function isPlaindrome(word) {

    if (word == word.split('').reverse().join(''))
        return true;

    return false;
}


var txtphrase = document.getElementById('phrase');
console.log(txtphrase);

function estPhrase() {
    var words = txtphrase.value.trim();
    var res = false;

    if (words == "")
        res = false;
    else {
        res = true;

    }


    if (res == true)
        document.getElementById('chercher').removeAttribute('disabled');
    else
        document.getElementById('chercher').setAttribute('disabled', "disabled");


    return res;

}

var txtmin = document.getElementById('min');
var txtmax = document.getElementById('max');
function estEntier() {


    var min = txtmin.value.trim();
    var max = txtmax.value.trim();



    if (min != "" && max != "") {
        min = parseInt(min);
        max = parseInt(max);
        if (!isNaN(min) && !isNaN(max) && min > 0 && max > 0 && max >= min) {
            document.getElementById('chercher').removeAttribute('disabled');
        }
        else {
            document.getElementById('chercher').setAttribute('disabled', "disabled");


        }
    }

    // if one field empty
    if (min != "" && max == "") {
        if (!isNaN(parseInt(min)) && parseInt(min) > 0) {
            document.getElementById('chercher').removeAttribute('disabled');
        }
        else {
            document.getElementById('chercher').setAttribute('disabled', "disabled");

        }

    }

    if (min = "" && max != "") {
        if (!isNaN(parseInt(max)) && parseInt(max) > 0) {
            document.getElementById('chercher').removeAttribute('disabled');

        }
        else {
            document.getElementById('chercher').setAttribute('disabled', "disabled");
        }

    }
}

// if two fiels empty
if (min == "" && max == "") {
    document.getElementById('chercher').removeAttribute('disabled');

}






function trouver() {

    var words = txtphrase.value.trim().split(' ');
    var min = txtmin.value.trim();
    var max = txtmax.value.trim();

    var arrayOfPlaindrome = [];

    words.forEach(function (e) {
        if (min != "" && max == "") {
            min = parseInt(min);
            if (e.length >= min) {
                if (isPlaindrome(e)) {
                    arrayOfPlaindrome.push(e);
                }
            }

        }

        if (min == "" && max != "") {
            max = parseInt(max);
            if (e.length <= max) {
                if (isPlaindrome(e)) {
                    arrayOfPlaindrome.push(e);
                }
            }
        }

        if (min == "" && max == "") {

            if (isPlaindrome(e)) {
                arrayOfPlaindrome.push(e);
            }


        }

        if (min != "" && max != "") {
            min = parseInt(min);
            max = parseInt(max);
            if (e.length >= min && e.length <= max) {
                if (isPlaindrome(e)) {
                    arrayOfPlaindrome.push(e);
                }
            }

        }
    });


    console.log(arrayOfPlaindrome);

    var res = "";
    arrayOfPlaindrome.forEach(function (e) {
        res += `<li>${e}</li>`
    });

    document.getElementById('palin').innerHTML = res;

    document.getElementById('resultat').innerHTML = `(${arrayOfPlaindrome.length}) Palindrome(s)`;


}



