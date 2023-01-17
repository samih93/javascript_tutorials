var firstMissingPositive = function (nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums);
    var max = maxofArray(nums)
    if (max > 0) {
        for (i = 1; i <= max; i++) {
            if (!nums.includes(i)) {
                smallpositivemissing = i;
                return smallpositivemissing;
            }
            else
                smallpositivemissing = max + 1;

            // remove first element  // first element  negative or  not equal to i 
            // cz nums.includes takes less time than complete nums
            nums.shift();


        }
    }
    else {
        smallpositivemissing = 1;
    }

    return smallpositivemissing;

};

function maxofArray(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max <= array[i])
            max = array[i];

    }
    return max;
}

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([-2147483648]));
