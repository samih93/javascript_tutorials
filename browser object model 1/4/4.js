

let div = document.querySelector('div');
let btn = document.querySelector('button');

let counter  = setInterval(function(){
    div.innerHTML -=1;
    if(div.innerHTML==="0")
    {
        clearInterval(counter);
        location.href='https://google.com';
    }
   
},1000);

btn.onclick = function(){
    console.log(btn.innerHTML);
    if(btn.innerHTML==="stop")
    {
        clearInterval(counter);
        btn.innerHTML="play";
    }
    else{
        counter = setInterval(function(){
            div.innerHTML -=1;
            if(div.innerHTML==="0")
            {
                clearInterval(counter);
                location.href='https://google.com';
            }
           
        },1000);        btn.innerHTML="stop";
    }

}