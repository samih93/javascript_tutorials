
// 120/1 = 120
// 120/2 = 60
// 60/3 = 20
// 20/4 = 5
// 5/5 = 1
// Résultat = 5!

var n = prompt("Entrer un nombre:");
var f = parseInt(n);

for (i = 1; i <= 10; i++) {
    // si f est number
    if (!isNaN(f)) {
        if (f % i == 0) {

            if (f / i == 1) {
                console.log(`${f}/${i} ==> ${f / i}  - rest de divistion ${f % i}`);

                console.log(n + " est factoriel de " + f);
                break;
            }
            console.log(`${f}/${i} ==> ${f / i}  - rest de divistion ${f % i}`);

            f = f / i;

        }
        else {

            console.log(n + " n’est pas un factoriel");
            break;
        }
    }
    // si f est chaine
    else {
        console.log("enter a valid number");
        break;
    }

}

