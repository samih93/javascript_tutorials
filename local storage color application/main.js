

let selectedlinks = document.querySelectorAll('ul li');
let mycoloreddiv = document.querySelector('.experiment');

if(localStorage.getItem('currentcolor')!=null){
    mycoloreddiv.style.backgroundColor = localStorage.getItem('currentcolor');
    selectedlinks.forEach(function(element){
        if(element.getAttribute('data-color')===localStorage.getItem('currentcolor'))
        {
            console.log(`make ${element.getAttribute('data-color')} active`);
            element.classList.add('active');
        }
        else{
            element.classList.remove('active');
        }
    })
   
}

selectedlinks.forEach(function(element){
    element.addEventListener('click',function(){
        console.log(this);
        selectedlinks.forEach(function(element){
            if(element.className==="active")
            {
                element.classList.remove('active');
            }
        });
        element.classList.add('active');
        localStorage.setItem('currentcolor',element.getAttribute('data-color'))
        mycoloreddiv.style.backgroundColor = localStorage.getItem('currentcolor');
    });
})



