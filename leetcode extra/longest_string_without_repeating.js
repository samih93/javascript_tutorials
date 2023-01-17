var lengthOfLongestSubstring = function (s) {
    var longest = "";
    var Mostlongest = "";

    if (s.length > 1) {
        for (i = 0; i < s.length; i++) {
            if (!longest.includes(s[i])) {
                longest += s[i];
                console.log("longest : " + longest.length)
            }
            else {
                Mostlongest = Mostlongest.length >= longest.length ? Mostlongest : longest;

                var indexofDuplicate = longest.indexOf(s[i]);
                longest = longest.substring(indexofDuplicate + 1, longest.length) + s[i];

            }




        }

    }
    else {
        if (s.length == 1)
            return 1;
        else return 0;
    }
    // if always go inside if () so longest have lenght and mostlongest =""
    return Mostlongest.length >= longest.length ? Mostlongest.length : longest.length;
};

console.log(lengthOfLongestSubstring("pwwkew"))
