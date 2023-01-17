let myString ="1,2,3,EE,l,z,e,r,o,_w,e,b,_,S,c,h,o,o,l,2,0,z";
var solution = myString.split(',').filter(function(element){
   return element!==',' && isNaN(parseInt(element)); 
}).join('').split('_').map(function(element){
   return element.split('').reduce(function(acc,current){
      return acc===current? acc: `${acc}${current}`;
   });
}).join(' ');


console.log(solution);
