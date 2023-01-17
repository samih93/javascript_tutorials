function inverserStr(ch) {

    // first method 

    // var newres = "";
    // for (i = ch.length - 1; i >= 0; i--) {
    //     newres += ch[i];
    // }
    // return newres;

    return ch.split('').reverse().join('');
}

// b 
function iverserStr(ch) {
    var length = ch.length;
    if (length = 1)
        return ch;

    else {
        ch.substring(length - 1) + iverserStr(ch.substring(0, length - 1));
    }

}
