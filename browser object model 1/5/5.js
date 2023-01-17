

// let div = document.querySelector('div');
// let counter  = setTimeout(function(){
//     div.innerHTML -=1;
//     if(div.innerHTML==="5")
//     {
//         clearInterval(counter);
//         window.open("https://google.com","_blank","height=600,width=400,left=200,top=100");
//         //  setTimeout(function() {
//         //     a.close();

//         //  },3)
//     }
   
// },1000);




let div = document.querySelector('div');

let counter  = setInterval(function(){
    div.innerHTML -=1;
    if(div.innerHTML==="5")
    {
        clearInterval(counter);
       let a = window.open("https://google.com","_blank","height=600,width=400,left=200,top=100");
       // close it after 3 seconds
         setTimeout(function() {
            {
                a.close();
            }

          },3000);
}
   
},1000)


