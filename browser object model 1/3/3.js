

let div = document.querySelector('div');

let counter = setInterval(function () {
    div.innerHTML -= 1;
    if (div.innerHTML === "0")
        clearInterval(counter);
}, 1000)