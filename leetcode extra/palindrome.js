var palindrome = function (string) {
    var reversestring = string.split('').reverse().join('');
    console.log(reversestring);
    if (string == reversestring)
        console.log("palindrome")
    else
        console.log("not palindrome");

};

