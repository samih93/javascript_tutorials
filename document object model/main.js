/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

//var btn = document.getElementById('btn_click');
let btn1 = document.querySelector('.mybuttonClass');
let email = document.querySelector('.email');
let mymessage = document.querySelector('.mymessage');



// email.addEventListener('focus', (event) => {
//  console.log("focus");
// });


email.onchange = function(){
  if(verifierPassword(email.value.trim().toString()))
  {
 
   mymessage.classList.add('hidden');
  }
  else
  { 
  
   mymessage.classList.remove('hidden');
 }
}


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

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr); // set empty attribute  and u can modify it later
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);


/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu ==> right click
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

// let myBtn = document.getElementById("btn_click");

// myBtn.onclick = function () {
//   console.log("click");
// };

// window.onresize = function () {
//   console.log("resizing");
// };


// let mydiv = document.querySelector('div');
// let mydiv1 = document.querySelector('[id=samih]');
// let mydiv2 = document.querySelector('[class=element]');
// let mydiv3 = document.querySelector('[name=js]');
// let mydiv4 = document.querySelectorAll('div');
// let mydiv5 = document.getElementById('samih');
// let mydiv6 = document.getElementsByClassName('element');
// let mydiv7 = document.getElementsByName('js');
// let mydiv8 = document.getElementsByTagName('div');
// let mydiv9 = document.body.firstElementChild;

// let mydiv10 = document.querySelectorAll('body div');





// console.log(mydiv);
// console.log(mydiv1);
// console.log(mydiv2);
// console.log(mydiv3);
// console.log(mydiv4[0]);
// console.log(mydiv5);
// console.log(mydiv6[0]);
// console.log(mydiv7[0]);
// console.log(mydiv8[0]);
// console.log(mydiv9);
// console.log(mydiv10[0]);

// //////////////////////////////////////////////////////////

// let myimages = document.querySelectorAll('.images1 div');
// console.log(myimages);

// for(let i=0;i<myimages.length;i++)
// {
//   //console.log(myimages[i].children.length);
//   if(myimages[i].children.length!=0)
//   {
//     myimages[i].firstElementChild.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
  
//     myimages[i].firstElementChild.setAttribute("alt","Elzero Logo");
//     myimages[i].firstElementChild.setAttribute("width","20px");
//   }
//   console.log(myimages[i]);
  
// }

// //////////////////////////////////////////////////////////////////////


// let myfield = document.querySelector('input');
// let myresult = document.querySelector('.result')
// console.log(myfield);
// myfield.onchange = function(){
//   let myval = this.value;
//   let mymessage = `{${myval} USD Dollar = {${(myval*15.6).toFixed(2)}}}`
// myresult.innerHTML = mymessage;
// }


// ////////////////////////////////////////////////////////////////////

// let divone = document.querySelector('.one');
// let divtwo = document.querySelector('.two');

// let title1 =  divtwo.getAttribute('title');
// let title2 =  divone.getAttribute('title');

// divone.title = title1;
// divone.innerHTML = title1;

// divtwo.title = title2;
// divtwo.innerHTML = title2+" "+2;


// console.log(divone);
// console.log(divtwo);

// ////////////////////////////////////////////////////


// let myimages2 = document.querySelectorAll('.images2 img');
// for(let i =0;i<myimages2.length;i++)
// {
//   if(myimages2[i].alt!=="")
//   {
//     myimages2[i].alt ="Old";
//   }
//   else{
//     myimages2[i].alt ="Elzero New"
//   }
//   console.log(myimages2[i]);
// }



// /////////////////////////////////////////////////

// let elemets = document.querySelector('.input[name="elements"]');
// let nbofelemets = 0;
// elemets.onchange = function() {
//   nbofelemets = this.value;
// };


// let btn = document.querySelector('input[type="submit"]');

// btn.onclick = function(event) {
//   event.preventDefault();
//   let elementtext = document.querySelector('.input[name="texts"]').value;
//   let typeOfElement = document.querySelector('.input[name="type"]').value;
//   let mybody = document.body;
 
//   let boxes = document.querySelectorAll(".box");
//   boxes.length >0 && boxes.forEach(function(element){
//     element.remove();
//   });

//   console.log(nbofelemets);
//   console.log(elementtext);
//   console.log(typeOfElement);

//   for(let i=0;i<nbofelemets;i++)
//   {
//     if(typeOfElement==="Div")
//     {
//       let id = `id-${i}`;
//       let myelement = document.createElement('div');
//       myelement.className="box";
//       myelement.title = "Element";
//       myelement.id = "id-"+i;
//       myelement.innerHTML=elementtext;
//       myelement.style.cssText = "color: blue;width:100px; margin:30px auto; background:orange;font-size: 30px;text-align: center;font-family: Arial";
//       mybody.appendChild(myelement);
//     }

//   }
// }

