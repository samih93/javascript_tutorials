let classesList = [];

let addclassfield = document.querySelector('.classes-to-add');
let removeclassfield = document.querySelector('.classes-to-remove');
 let resultdiv = document.querySelector('.result');
 

 addclassfield.addEventListener('blur', (event) => {
    let ar = addclassfield.value.trim().split(' ');
    addRemoveClass(ar,true);
  });

  removeclassfield.addEventListener('blur', (event) => {
    let ar = removeclassfield.value.trim().split(' ');
    addRemoveClass(ar,false);
  });

  if(classesList.length===0)
  {
     let message = document.createTextNode('No classes to show');
     resultdiv.append(message);
  }

 function addRemoveClass(classes ,isAdd)  // add for add , false for remove
 {
    resultdiv.replaceChildren('');

    classes.forEach(elementToAdd => {
        if(isAdd===true)
        {
            classesList.push(elementToAdd.toLowerCase());
        }
        else
        {   
            const index = classesList.indexOf(elementToAdd);
            if (index > -1) {
                classesList.splice(index, 1);
            }
        }
    });
    if(classesList.length>0)
   
    {
        classesList.forEach(function(element){
            let span = document.createElement('span');
            span.innerHTML = element;
            resultdiv.append(span);
        })
    }
    addclassfield.value ='';
    removeclassfield.value ='';
   
    console.log(classesList);
 }


 const numbers = [1, 2, 3];
const index = numbers.indexOf(2);
if (index > -1) {
  numbers.splice(index, 1);
}
console.log(numbers);