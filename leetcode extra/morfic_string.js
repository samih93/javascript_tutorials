// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

//! isIsomorphic
// str1 = 'ABCA'
// str2 = 'XYZX'
// 'A' maps to 'X'
// 'B' maps to 'Y'
// 'C' maps to 'Z'

//! is not isIsomorphic
// str1 = 'ABCA'
// str2 = 'WXYZ'
// 'A' maps to 'W'
// 'B' maps to 'X'
// 'C' maps to 'Y'
// 'A' again maps to 'Z'


var Isomorphic = function (s, t) {

    if (s.length == t.length) {
        var map = new Map();
        var isAsignMoreCharacter = false;

        for (i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                if (map.get(s[i]) != t[i])
                    return false;

                map.set(`${s[i]}`, t[i]);
            }
            else {
                var values = [...map.values()];
                //! here if the value already assign and the key is not exist in map 
                //!For Ex: g => a, c => a, if c = a no problem
                //! bgbc
                //! baba
                if (values.includes(t[i]))
                    return false;
                map.set(`${s[i]}`, t[i]);
            }
        }
    }
    else {
        return false;
    }
    return true;

};

console.log(Isomorphic("bgbc", "baba"));


