//01 
      // Code One error cz javascript  loaded befor html

// ------------     02
// نوع العنصر هو h1
// خواص ال CSS هي كالتالي ويجب إضافتها بواسطة JavaScript


// var h1 = document.querySelector('h1').style;
// h1.color = 'blue';
// h1.fontSize = '80px';
// h1.fontWeight = 'bold';
// h1.textAlign = 'center';
// h1.fontFamily = 'Arial';

// or 
//02
 document.querySelector('h1').style.cssText+='color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial';


//03
 console.log('%cElzero %cWeb %cScholl','color:red','color:blue','color:white;background-color:blue');

 //04
 console.group('%cGroup ','Font-weight:bold;color:red');
 console.log('Message one');
 console.log('Message Two');
 console.group('%cChild Group 1','Font-weight:bold;color:red');
 console.log('Message one');
 console.log('Message Two');
 console.group('%cGrand child Group 1','Font-weight:bold;color:red');
 console.log('Message one');
 console.log('Message Two');
 console.groupEnd();
 console.groupEnd();
 console.groupEnd();
 console.group('%cGroup 2 ','Font-weight:bold;color:red');
 console.log('Message one');
 console.log('Message Two');

// 05 
console.table(['Elzero','ahmad','samih','gamal','aya']);



