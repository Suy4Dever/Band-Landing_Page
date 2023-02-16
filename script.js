let imgList = ["/img/band-img.jpg", "/img/chicago.jpg", "/img/ny.jpg"];
let locationList = ["Los Angeles","New York", "Chicago"];
let descriptionList = ["We had the best time playing at Venice Beach!", "The atmosphere in New York is lorem ipsum.", "Thank you, Chicago - A night we won't forget."]

let index = 0;
setInterval(() => {
    if(index === imgList.length) index = 0;
    document.getElementsByClassName("band-img")[0].src = "http://127.0.0.1:5500" + imgList[index];
    document.getElementsByClassName("performance-location")[0].textContent = locationList[index];
    document.getElementsByClassName("performance-description")[0].textContent = descriptionList[index];
    index++;
}, 3000)