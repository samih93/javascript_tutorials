
function render()
 {
//     var courses = {
//         "java":20,
//         "html":10,
//         "web":15,
//         "php":25
//     };

    var courses = [
        {'title':"java" , "prix_unitair":20},
        {'title':"html" , "prix_unitair":10},
        {'title':"web" , "prix_unitair":15},
        {'title':"php" , "prix_unitair":25},
    ];

     var res ="";
    // Object.entries(courses).forEach(function(entry){
    //     [key,value] = entry;
    //         res+= `<option value=${value}>${key}</option>`;
    // });

    courses.forEach(function(element){
        res+= `<option value=${element.prix_unitair}>${element.title}</option>`;
    });

    document.querySelector('#s1').innerHTML = res;
    document.querySelector('#s2').innerHTML = res;
    document.querySelector('#s3').innerHTML = res;
}

render();


function selectCourse(element)
{
    console.log(`#${element.id}t2`);
    var prix_unitairField = document.querySelector(`#${element.id}t2`); 
    prix_unitairField.value = element.value;
    var quantity = document.querySelector(`#${element.id}t1`).value;
    document.querySelector(`#${element.id}t3`).value = quantity* element.value;


    total();
}




function onchangequanity(element){
    
    var quantity = element.value;
    var row = element.id.split('t')[0];
    var prixunitair = parseInt(document.querySelector(`#${row}t2`).value);
   document.querySelector(`#${row}t3`).value = quantity * prixunitair;
   total();
}




function total(){
    var prix1 = parseInt(document.querySelector('#s1t3').value);
    var prix2 = parseInt(document.querySelector('#s2t3').value);
    var prix3 = parseInt(document.querySelector('#s3t3').value);

  
    document.querySelector('#total').value = prix1+prix2+prix3;
}