
let myp = document.querySelector('p').remove();
let ourelement = document.querySelector('.our-element');
// start 
let start = document.createElement('div');
start.className='start';
start.title='Start Element';
start.innerHTML='Start';
start['data-value'] ="start"

// end
let End = document.createElement('div');
End.className='End';
End.title='End Element';
End.innerHTML='End';
End['data-value'] ="End"


ourelement.before(start);
ourelement.after(End);
