

let myelment = document.createElement("div");


myelment.className = "product";






for(let i=0;i<100;i++)
{
    let myh3  = document.createElement("h3");
    let myp  = document.createElement("p");
    let myh3text = document.createTextNode("this is h"+(i+1) +"\n");
    let myptext = document.createTextNode("this is paragraph "+(i+1)+"\n");
    myh3.appendChild(myh3text);
    myp.appendChild(myptext);
    myelment.appendChild(myh3);
    myelment.appendChild(myp);
}
document.body.appendChild(myelment);


