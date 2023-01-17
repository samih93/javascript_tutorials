let mybody = document.querySelector('body');

for (let i = 0; i < 5; i++) {
    mybody.children[i].addEventListener('click', function () {
        console.log(`this is '${mybody.children[i].nodeName}'`);
    });
}