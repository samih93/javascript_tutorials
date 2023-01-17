function isEmptyField(id, errorSpanId) {
    var result = false;
    var field = document.getElementById(id);
    var value = field.value.trim();

    if (field.hasAttribute('required')) {
        if (value == "") {
            result = true;
        }
    }
    if (result)
        document.getElementById(errorSpanId).innerHTML = `${field.getAttribute('placeholder')} must be not Empty`;
    else
        document.getElementById(errorSpanId).innerHTML = ``;

    return result;

}





function verifier() {


    var isEmptyName = isEmptyField('txtname', 'lblerrorName');
    var isEmptyLastName = isEmptyField('txtlastname', 'lblerrorLastName');
    var isEmptyMiddleName = isEmptyField('txtmiddleName', 'lblerrorMidlleName');

    if (!isEmptyName && !isEmptyLastName && !isEmptyMiddleName)
        return true;


    return false;
}
var btn = document.querySelector('#btn');
btn.onclick = function () {

    if (verifier())
        alert('success');



}


// ! blur onchange

// var myfield = document.getElementById('forcheck');
// myfield.onblur = function () {
//     console.log("Blur");
// }

// myfield.onchange = function () {
//     console.log("onchange");
// }

function filtering(e) {
    console.log(e.keyCode);
}



var btnskills = document.getElementById('btnSkills');

// function onChange(element) {
//     if (element.checked == true) {
//         element.setAttribute('checked', '');
//     }
//     else {
//         element.removeAttribute('checked');
//     }
// }
var skills = document.querySelectorAll('input[type=checkbox]');

skills.forEach(function(e){
    
    console.log( "lenght :"+skills.length);
    //! e.addEventListener('click',function(){
    //!  e.hasAttribute('checked') ? e.removeAttribute('checked'): e.setAttribute('checked','');
     
     //! Or 
     e.onclick = function(){
        e.hasAttribute('checked') ? e.removeAttribute('checked'): e.setAttribute('checked','');
    };
});

btnskills.onclick = function () {
    

    var ar = [];
    skills.forEach(function (e) {
        if (e.hasAttribute('checked'))
            ar.push(e.getAttribute('value'));
    });

    console.log(ar);

};


