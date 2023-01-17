let firstname = document.querySelector('.name');
let lastname = document.querySelector('.lastname');
let age = document.querySelector('.age');

let selectbox = document.querySelector('.selectbox');


if(sessionStorage.getItem('firstname')!=null)
firstname.value = sessionStorage.getItem('firstname');

if(sessionStorage.getItem('lastname')!=null)
lastname.value = sessionStorage.getItem('lastname');

if(sessionStorage.getItem('age')!=null)
age.value = sessionStorage.getItem('age');


if( sessionStorage.getItem('selectedoption')!==null)
{
    
    const options = Array.from(selectbox.options);
    const optionToSelect = options.find(item => item.text ===sessionStorage.getItem('selectedoption'));
    optionToSelect.selected = true;

}



firstname.addEventListener('blur',function(){
    sessionStorage.setItem('firstname',this.value);
});


lastname.addEventListener('blur',function(){
    sessionStorage.setItem('lastname',this.value);
});

age.addEventListener('blur',function(){
    sessionStorage.setItem('age',this.value);
});

selectbox.addEventListener('change',function(){
    console.log(this.value);
    sessionStorage.setItem('selectedoption',this.value) ;

});



