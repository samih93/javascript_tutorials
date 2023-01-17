//! check image if has attribute alt change attribute to old else change to new

//<img decoding="async" src="#" alt="Old" />
//<img decoding="async" src="#" alt="New" />
//<img decoding="async" src="#" alt="Old" />
//<img decoding="async" src="#" alt="New" />
//<img decoding="async" src="#" alt="New" />


var images = document.querySelectorAll('img');

images.forEach(function (e) {
    if (e.hasAttribute("alt"))
        e.alt = "Old";
    else
        e.alt = "New";
});