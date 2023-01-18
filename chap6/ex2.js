var txtprenom = document.getElementById("prenom");
var txtnom = document.getElementById("nom");
var txtnaiss = document.getElementById("naiss");

var txtmail = document.getElementById("mail");
var txtuser = document.getElementById("user");
var txtpass = document.getElementById("pass");


console.log("Abc".charCodeAt(0));

function genererEmail() {

    var prenom = txtprenom.value;
    var nom = txtnom.value;
    var naiss = txtnaiss.value;

    txtmail.value = prenom + nom + naiss.substring(2);

}

function genererUser() {
    var prenom = txtprenom.value;
    var nom = txtnom.value;


    prenom = prenom.length >= 4 ? prenom.substring(0, 4) : prenom + prenom.substring(0, 4 - prenom.length);

    nom = nom.length >= 4 ? nom.substring(0, 4) : nom + nom.substring(0, 4 - nom.length);


    txtuser.value = prenom.toUpperCase() + nom.toLowerCase();
}

function genererPass() {
    var prenom = txtprenom.value;
    var nom = txtnom.value;

    var password = prenom.substring(0, 1) + nom[0] + prenom.charCodeAt(prenom.length - 1) + nom.charCodeAt(nom.length - 1);

    console.log(password);
    // ! position de premier voyelle

    var username = txtuser.value.toLowerCase();
    console.log(username);

    var voyelle = ['a', 'e', 'i', 'o', 'y', 'u'];
    var indexOfFirstvowel = -1;

    for (i = 0; i < username.length; i++) {
        if (username[i] == "a" || username[i] == "e" ||
            username[i] == "i" || username[i] == "o" ||
            username[i] == "y" || username[i] == "u") {
            indexOfFirstvowel = i;
            break;
        }

    }

    password += indexOfFirstvowel != -1 ? indexOfFirstvowel : "";


    txtpass.value = password;

}


function concaténer3Champ() {
    var prenom = txtprenom.value;
    var nom = txtnom.value;
    var naiss = txtnaiss.value;

    var res = prenom + " " + nom + " " + naiss;

    var arr = res.split(' ');
    
    return arr;
}





