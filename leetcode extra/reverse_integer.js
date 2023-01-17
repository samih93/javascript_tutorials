var reverse = function (x) {
    var isNegative = false;
    if (x < 1534236469 && (x > -1534236469 || x == -2147483412)) {
        if (`${x}`.includes('-')) {
            x = `${x}`.substring(1, `${x}`.length).split('').reverse().join('');
            isNegative = true;
        }
        else {
            x = `${x}`.split('').reverse().join('');

        }
    }
    else {
        return 0;
    }

    return isNegative ? - x : x;
};

