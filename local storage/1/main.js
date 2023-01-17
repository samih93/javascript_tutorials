let fontselect = document.querySelector('.fonts');
let fontcolor = document.querySelector('.colors');
let fontsize = document.querySelector('.sizes');
let text = document.querySelector('h1');

window.onload = function()
{
    if( localStorage.getItem('currentfont')!==null)
    {
        text.style.fontFamily = localStorage.getItem('currentfont');

        const options = Array.from(fontselect.options);
        const optionToSelect = options.find(item => item.text ===localStorage.getItem('currentfont'));
        optionToSelect.selected = true;
    }
    
  
    if( localStorage.getItem('currentcolor')!==null)
    {
        text.style.color = localStorage.getItem('currentcolor');

        const options = Array.from(fontcolor.options);
        const optionToSelect = options.find(item => item.text ===localStorage.getItem('currentcolor'));
        optionToSelect.selected = true;
    }

    if( localStorage.getItem('currentfontSize')!==null)
{
    text.style.fontSize =  `${localStorage.getItem('currentfontSize')}mm`;
    const options = Array.from(fontsize.options);
    const optionToSelect = options.find(item => item.text ===localStorage.getItem('currentfontSize'));
    optionToSelect.selected = true;

}
}


fontselect.addEventListener('change',function(){
    console.log(this.value);
    localStorage.currentfont = `${this.value}`;
    text.style.fontFamily = `${localStorage.getItem('currentfont')}, sans-serif`;

});
fontcolor.addEventListener('change',function(){
    console.log(this.value);
    localStorage.currentcolor = this.value;
    text.style.color =localStorage.getItem('currentcolor');
});
fontsize.addEventListener('change',function(){
    console.log(this.value);
    localStorage.currentfontSize = `${this.value}`;

    text.style.fontSize = `${localStorage.getItem('currentfontSize')}mm`;
});
