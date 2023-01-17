// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
var isSubsequence = function (s, t) {
    var res = "";
    var index_findInS = -1;
    var index_findInT = -1;
    for (j = 0; j < s.length; j++) {

        for (i = 0; i < t.length; i++) {


            if (t[i] == s[j] && index_findInS < j) {
                if (index_findInT < i) {
                    res += s[j];
                    index_findInS = j;
                    index_findInT = i;
                    //  console.log("new res :" + res);
                }




            }
        }
        console.log(res);
    }
    if (res == s)
        return true;

    return false;
};

console.log(isSubsequence("abc", "ahbgdc"));

