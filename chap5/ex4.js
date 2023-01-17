function effacerSpace(str) {

    var res="";
    for(i=0;i<str.length;i++)
    {
        if(str[i]!=" ")
        res+=str[i];
    }
    return res;
}

console.log(effacerSpace(" ab c mnp xyz ")); //→ "abcmnpxyz"