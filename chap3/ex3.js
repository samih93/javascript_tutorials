
//  1 
//  1  2 
//  1  2  3 
//  1  2  3  4 
//  1  2  3  4  5 
//  1  2  3  4  5  6 
//  1  2  3  4  5  6  7 
//  1  2  3  4  5  6  7  8 


for (var i = 1; i <= 8; i++) {
    var res = "";

    for (var j = 1; j <= i; j++) {

        res += ` ${j} `;
    }

    console.log
        (res);
}


// 1 
//   2 
//      3 
//         4 
//            5 
//               6 
//                  7 
//                     8 

for (var i = 1; i <= 8; i++) {
    var res = "";
    for (var j = 1; j <= i; j++) {
        if (i == j)
            res += ` ${j} `;
        else
            res += "   ";

    }

    console.log
        (res);
}


// 1  2  3  4  5  6  7  8 
// 1  2  3  4  5  6  7 
// 1  2  3  4  5  6 
// 1  2  3  4  5 
// 1  2  3  4 
// 1  2  3 
// 1  2 
// 1 

//Ex : 
// 8 7 6 5 4 3 2 1 
// 8 7 6 5 4 3 2 
// 8 7 6 5 4 3
// 8 7 6 5 4
// 8 7 6 5
// 8 7 6
// 8 7 
// 8

for (var i = 1; i <= 8; i++) {
    var res = "";
    for (var j = 1; j <= 9 - i; j++) {
        res += ` ${j} `;
    }

    console.log
        (res);
}

//                     8 
//                   7 
//                6 
//             5 
//          4 
//       3 
//    2 
// 1 

for (var i = 1; i <= 8; i++) {
    var res = "";
    for (var j = 1; j <= 9 - i; j++) {
        if (j < 9 - i)
            res += "   ";
        else
            res += ` ${j} `;
    }

    console.log
        (res);
}
