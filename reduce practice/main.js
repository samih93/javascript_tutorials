let theBiggest = ['bla','paragrapg','samih','Battery','House','asdasgdgashjsgf'];


let check = theBiggest.reduce(function(acc,current){

return acc.length>current.length? acc : current;
 });

 console.log(check);


 let chars =['S','@','A','@','M','@','I','H','@',];

 let newString = chars.filter(function(element){
    return ! element.includes('@');
 }).reduce(function(acc,current){
    return `${acc}${current}`;
 })
 console.log(newString);