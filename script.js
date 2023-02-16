let imgList = ["/img/band-img.jpg", "/img/chicago.jpg", "/img/ny.jpg"];

let index = 0;
setInterval(() => {
    if(index === imgList.length) index = 0;
    document.getElementsByClassName("band-img")[0].src = "http://127.0.0.1:5500" + imgList[index];
    index++;
}, 2000)