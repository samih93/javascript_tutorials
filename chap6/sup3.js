//   <div class="one" title="two">Inner html Two</div>
//  <div class="two" title="one">Inner html One</div>
//! need this 

// <div class="one" title="one">One</div>
//<div class="two" title="two">Two</div> 

var Elementone = document.querySelector('.one');
var Elemnttwo = document.querySelector('.two');

var titletwo = Elementone.getAttribute('title');
var innerHtml2 = Elementone.innerHTML;

var titleone = Elemnttwo.getAttribute('title');
var innerHtml1 = Elemnttwo.innerHTML;


Elementone.setAttribute("title", titleone);
Elementone.innerHTML = innerHtml1;

Elemnttwo.setAttribute("title", titletwo);
Elemnttwo.innerHTML = innerHtml2;

