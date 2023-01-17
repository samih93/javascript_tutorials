let str = 'Hi samih';


console.log(str.substring(3, 5));

var date = "2020-10-11T14:23:22";
console.log("date :" + date.split('T')[0] + "  time : " + date.split('T')[1]);
console.log("date :" + date.substring(0, 10) + "  time : " + date.substring(11));

//// 
console.log(str.charAt(4));

console.log(str.indexOf("i", 2));


var a = [1, 3, 4, 5, 6, 7, 7];
var target = 5;

console.log(a.join(' ').indexOf(target));

console.log(String.fromCharCode(97));



function factoriel(n) {
    return n * factoriel(n - 1);
}

// 4 * facotorial(3)
// 3* facotoriel(2)
// 2* facotoriel(1)
// 1* facotoriel(0)


/// permier majuscule
function permierMajuscule(ch) {
    // first method
    // var newRes = "";
    // for (i = 0; i < ch.length; i++) {
    //     newRes += i == 0 ? ch[i].toUpperCase() : ch[i];
    // }
    // console.log(newRes);//

    // second 
    var ar = ch.split('');
    console.log(ar);
    ar[0] = ar[0].toString().toUpperCase();
    console.log(ar.join(''));
}

permierMajuscule("samih");

function voyelleExiste(ch) {
    ch = ch.toLowerCase();

    // a ,e ,o,y,i , u
    //  first 
    // for (i = 0; i < ch.length; i++) {
    //     if (ch[i] == "a" || ch[i] == "e" || ch[i] == "u" || ch[i] == "i" || ch[i] == "o" || ch[i] == "y")

    //         return true;
    // }
    // second
    // if (ch.includes("a") || ch.includes("e") || ch.includes("u") || ch.includes("i") || ch.includes("o") || ch.includes("y"))

    //     return true;

    // third
    var a = ["a", "e", "o", "y", "i", "u"];
    for (i = 0; i < a.length; i++) {
        if (ch.includes(a[i]))

            return true;
    }

    return false;
}

console.log(voyelleExiste("sdys"));

var chaine = "samih";

console.log(chaine.slice(-2));


//  kayak
function isPalindrome(chaine)      //  isplaindrom(kayak) isplaindrom(aya) isplaindrom(y)
{
    var length = chaine.length;
    if (chaine.length < 2) return true;

    if (chaine[0] == chaine[length - 1]) {
        return isPalindrome(chaine.substring(1, length - 1));
    }

    return false;
}
//  isplaindrom(anna) isplaindrom(nn)  isplaindrom("") 

console.log("isplaindrome " + isPalindrome("civicd"));