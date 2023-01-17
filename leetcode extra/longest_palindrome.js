// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function (str = "") {
    var map = new Map();
    if (str.length == 1)
        return 1;



    for (j = 0; j < str.length; j++) {
        console.log(str[j]);
        console.log(map.has(str[j]));
        if (!map.has(str[j]))
            map.set(str[j], 1);
        else
            map.set(str[j], map.get(str[j]) + 1);
    }


    // sort by ascending
    var map = new Map([...map].sort((a, b) => a[1] - b[1]));
    console.log(map);

    var ar = [...map.values()];
    console.log(ar);
    var max = 0;


    if (ar.length == 1)
        return ar[0];


    if (ar.length == 2) {
        if (ar[0] == 1) {
            return ar[1] % 2 == 0 ? ar[0] + ar[1] : ar[0] + ar[1] - 1;
        }
        else {
            if (ar[0] == ar[1])
                return ar[0] * 2 - 1;
            else
                return ar[0] + ar[1];
        }


    }

    var countOdd = 0;
    for (i = 0; i < ar.length; i++) {
        if (ar[i] == 1 && i == 0) {
            max += 1;
            countOdd++;
        }

        if (ar[i] > 1) {

            if (ar[i] % 2 == 0) {
                max += ar[i]
            } else {
                max += countOdd < 1 ? ar[i] : ar[i] - 1;
                countOdd++;
            }
        }

    }


    return max;

}

console.log(longestPalindrome("bananas"));