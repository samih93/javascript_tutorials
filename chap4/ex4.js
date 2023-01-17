



function myfunction(tab) {
    for (i = 0; i < tab.length; i++) {
        for (j = i + 1; j < tab.length; j++) {
            if (tab[i] >= tab[j]) {
                var temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
        // console.log(tab);
    }
    return tab;

}

let a = [8, 2, 3, 19, 12];

function myfunction1(array) {
    for (j = 0; j < array.length; j++) {
        var indexOfMin = index_OfMinArray(j, array); // 1
        if (array[j] > array[indexOfMin]) {
            var temp = array[j];
            array[j] = array[indexOfMin];
            array[indexOfMin] = temp;
        }

    }
    return array;
}

function index_OfMinArray(index, tab) {
    var min = tab[index];
    var indexOfMin = index;
    for (i = index; i < tab.length; i++) {
        if (min > tab[i]) {
            min = tab[i];
            indexOfMin = i;
        }
    }
    return indexOfMin;
}


// console.log
//     (a);
// console.log(myfunction(a));

console.log(index_OfMinArray(0, a));
console.log(myfunction1(a));

// function myfunction1(tab) {
//     for (i = tab.length - 1; i >= 1; i++) {
//         for (j = 0; j < i; j++) {
//             if (tab[j] >= tab[j + 1]) {
//                 var temp = tab[j];
//                 tab[j] = tab[j + 1];
//                 tab[j + 1] = temp;
//             }
//         }
//         // console.log(tab);
//     }
//     return tab;

// }



