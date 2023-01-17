//a
function minofArray(array) {

  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (min >= array[i])
      min = array[i];
  }
  return min;
}
//b
function maxofArray(array) {

  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (max <= array[i])
      max = array[i];
  }
  return max;
}
//c
function avgofArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i]))
      sum += array[i];
  }

  return sum / array.length;
}
//d
let t = [15, 8, 7, 16, 20, 47, 11, 14, 27, 32, 9, 17, 8, 2, 49, 17];

// console.log(`max of array  ${maxofArray(t)}`);
// console.log(`min of array  ${minofArray(t)}`);
// console.log(`avg of array  ${avgofArray(t)}`);

console.log(Math.max(...t));