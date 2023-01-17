function createarray(nbr, max) {
    let tab = [];
    let i = 0;
    while (i < nbr) {
        tab.push(Math.floor(Math.random() * max));
        i++;
    }
    return tab;
}

// 1 method to forget
// function compterchiffre_1(chiffres) {

//     var nb0 = 0;
//     var nb1 = 0;
//     var nb2 = 0;
//     var nb3 = 0;
//     var nb4 = 0;
//     var nb5 = 0;
//     var nb6 = 0;
//     var nb7 = 0;
//     var nb8 = 0;
//     var nb9 = 0;
//     for (i = 0; i < chiffres.length; i++) {


//         switch (chiffres[i]) {
//             case 0: nb0++; break;
//             case 1: nb1++; break;
//             case 2: nb2++; break;
//             case 3: nb3++; break;
//             case 4: nb4++; break;
//             case 5: nb5++; break;
//             case 6: nb6++; break;
//             case 7: nb7++; break;
//             case 8: nb8++; break;
//             case 9: nb9++; break;
//         }
//     }

//     return [nb0, nb1, nb2, nb3, nb4, nb5, nb6, nb7, nb8, nb9];
// }

// function compterchiffre_2(tab) {
//     var newtab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//     for (i = 0; i < tab.length; i++) {

//         switch (tab[i]) {
//             case 0: newtab[0] = newtab[0] + 1; break;
//             case 1: newtab[1] = newtab[1] + 1; break;
//             case 2: newtab[2] = newtab[2] + 1; break;
//             case 3: newtab[3] = newtab[3] + 1; break;
//             case 4: newtab[4] = newtab[4] + 1; break;
//             case 5: newtab[5] = newtab[5] + 1; break;
//             case 6: newtab[6] = newtab[6] + 1; break;
//             case 7: newtab[7] = newtab[7] + 1; break;
//             case 8: newtab[8] = newtab[8] + 1; break;
//             case 9: newtab[9] = newtab[9] + 1; break;
//             default: break;
//         }
//     }
//     return newtab;
// }


function compterchiffre_3(tab) {
    var newtab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < tab.length; i++) {
        var a = tab[i];

        newtab[a] = newtab[a] + 1;
    }
    return newtab;
}



var chiffres = createarray(100, 10);



console.log(chiffres);
console.log(compterchiffre_3(chiffres));

//[ 0 , 1 ,2,3,4,5,6,7,8,9]
//[6,10,39,33,0,3]

