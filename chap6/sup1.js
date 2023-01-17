//! 1---------- 
// change src image for all image dynamic
//link https://tse3.mm.bing.net/th/id/OIP.JDa_1X-NqdM1K-bZxp99DQHaEo?pid=ImgDet&rs=1

// var images = document.querySelectorAll('img');
// images.forEach(function (e) {
//     e.src = "https://tse3.mm.bing.net/th/id/OIP.JDa_1X-NqdM1K-bZxp99DQHaEo?pid=ImgDet&rs=1";;
// });

//! 2---------
//change src image for all image dynamic
// and set for each element an image from the given array
arrayOfImage = [
    "https://tse1.mm.bing.net/th/id/OIP.JDa_1X-NqdM1K-bZxp99DQHaEo?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.0cfe3cb86925753834d56c792931315c?rik=GA0RqPxgQyA0KA&pid=ImgRaw&r=0",
    "https://i.pinimg.com/736x/96/9b/58/969b58997ee509270106b47f5bcc03b0.jpg",
    "https://images.pexels.com/photos/2416888/pexels-photo-2416888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?cs=srgb&dl=cold-snow-landscape-858115.jpg&fm=jpg",
    "https://ww1.prweb.com/prfiles/2010/06/17/4161594/2_Getty04.jpg",
];
var images = document.querySelectorAll('img');

// for (i = 0; i < images.length; i++) {
//     images[i].src = arrayOfImage[i];
// }
var index = 0;
images.forEach(function (e) {
    //e.src = arrayOfImage[index];
    e.setAttribute("src", arrayOfImage[index]);
    index++;
});







