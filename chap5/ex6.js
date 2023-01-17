function verifierPassword(str)
{
    var ishasOneCapital = false;
    var ishasOneLower = false;
    var ishasSpecialCaracter = false;
    if(str.length<8)
    return false;
    else
    {
        // u can loop as u want like for(i=0;i<str.length;i++)
      str.split('').forEach(function(e){
        if(e=='$') // here u can add more special caracter (e=='$' || e=='@' .... etc)
        {
            ishasSpecialCaracter = true;
        }
        // if e not a special caracter 
        else
        {
            // if e is string 
            if(isNaN(e))
            {   
                console.log(e);
                // if e aleady lowerCase 
                if(e == e.toLowerCase())
                    ishasOneLower = true;
                
                // if e aleady UpperCase 
                if(e==e.toUpperCase())
                ishasOneCapital = true;
            }               
        }
        
       


      });
   }
   return ishasOneCapital && ishasOneLower && ishasSpecialCaracter ? true:false
}

console.log(verifierPassword("Assfd029"));
console.log(verifierPassword("abc29"));