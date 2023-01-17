// // ex1 : 
// function calculate(firstnumber, secondnumber, operation) {

//   if (secondnumber == undefined) {
//     console.log("Second Number Not Found");
//   }
//   else {
//     switch (operation) {
//       case "add": console.log(firstnumber + secondnumber); break;
//       case "subtract": console.log(firstnumber - secondnumber); break;
//       case "multiply": console.log(firstnumber * secondnumber); break;
//       default: console.log(firstnumber + secondnumber); break;
//     }
//   }
// }



// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(40, 30); // 70
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


// //////////////////////////////////////////////////////////////////////////


// // ex2 : 
// function ageInTime(theAge) {
//   // your code here 
//   var nbofmonths;
//   if (theAge >= 10 && theAge <= 100) {
//     nbofmonths = Math.floor(parseInt(12) * theAge);
//     console.log(`${nbofmonths} Months`);
//   }
//   else {
//     console.log("Age Out Of Range");
//   }
// }

// // Needed Output

// ageInTime(9); // Age Out Of Range
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// //////////////////////////////////////////////////////////////////////////////


// //ex3 : ...numbers ==> u can add many parameters  and u can catch them by looping on numbers 
// // example multiply(2,3,4) ==> numbers.lenght = 3 so u can loop on numbers and catch each parameter
// function multiply(...numbers) /// 
// {
//   var res = 1;
//   numbers.forEach((e) => {
//     if (!isNaN(e))
//       res *= parseInt(e);
//   })
//   console.log(res);
// }

// // Needed Output
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
// multiply(100.5, 10, "B", 15); // 15000
// multiply(100, 10, 2, 15, 3, 5, 4, 3, 4, 5, "sasdas"); // 15000



// function specialMix(...tab) {
//   var sum = 0;
//   tab.forEach((e) => {
//     if (!isNaN(parseInt(e)))
//       sum += parseInt(e);
//   });
//   return sum == 0 ? "All Is Strings" : sum;
// }


// console.log(specialMix(10, 20, 30, 40)); //100
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings




// var new_list = ["samih", "ahmad", "mohamd", "ali", "elie"];

// new_list.forEach((e) => {
//   if (e.includes('a'))
//     console.log(e);
// });

// // array of element contains a

// new_list = new_list.map((e) => {
//   return e.includes('a') ? e + "test" : "";
// });
// console.log(new_list);




// // reverse array 
// var a1 = [12, 434, 3, 5, 8, 0, 1, 22];



// function myreverse(array) {
//   var reversearray = [];
//   for (i = array.length - 1; i >= 0; i--) {

//     reversearray.push(array[i]);
//   }
//   return reversearray;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var array1 = [2, 4, 3];

var array2 = [5, 6, 4];

function calculate(array1, array2) {
  var res1 = "";
  var res2 = "";
  for (i = array1.length - 1; i >= 0; i--) {
    res1 += array1[i];
  }
  for (i = array2.length - 1; i >= 0; i--) {
    res2 += array2[i];
  }
  console.log(res1);
  console.log(res2);

  var sum = (+res1 + +res2).toString();

  return sum.toString().split('').reverse();
}
calculate(array1, array2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


var nums1 = [1, 4];
var nums2 = [3, 2];
var mediane = (a, b) => {
  var res = [...a, ...b].sort((a, b) => a - b);

  var lenghtOfarray = res.length;


  // pair ou impair 


  // res lenght is [pair]

  if (lenghtOfarray % 2 == 0) {
    return "mediane is  " + (res[lenghtOfarray / 2 - 1] + res[lenghtOfarray / 2]) / 2;
  }
  else {
    // res lenght [impair]
    return "mediane is " + res[Math.floor(lenghtOfarray / 2)];

  }
  // var res = [];
  // let i = 0;
  // let j = 0;
  // while (i < nums1.length && j < nums2.length) {

  //   if (nums1[i] < nums2[j]) {
  //     res.push(nums1[i]);
  //     i++;
  //   } else {
  //     res.push(nums2[j]);
  //     j++;
  //   }
  // };

  // while (i < nums1.length) {
  //   res.push(nums1[i]);
  //   i++;
  // };
  // while (j < nums2.length) {
  //   res.push(nums2[j]);
  //   j++;
  // };
};
console.log(mediane(nums1, nums2));


///////////////////////////////////////////////////////////////////////////////////

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


function target(array, target) {
  var res = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] + array[j] == target && i != j) {
        // res.push(i);
        // res.push(j);
        res[0] = i;
        res[1] = j;
        return res;

      }
    }

  }

  if (res.length == 0)
    return -1;
}

var tab = [2, 7, 13, 5];
var t = 20;
console.log(target(tab, t));