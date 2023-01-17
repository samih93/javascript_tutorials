
//التكليف 01

var numberone = 10;
var numbertwo = 20;


console.log(numberone+""+numbertwo);
console.log(`${numberone}${numbertwo}`);

console.log(numberone+"\n"+numbertwo);
console.log(`${numberone}
${numbertwo}`);


// video 17 challenge 

var title="Elzero";
var description="Elzero web School";
var date="25/10";

var card = `
<div class="card">
<h1>${title}</h1>
<p>${description}</p>
<span>${date}</span>
</div>
`



document.write(card.repeat(4));
 