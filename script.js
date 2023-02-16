let imgList = ["./img/band-img.jpg", "./img/chicago.jpg", "./img/ny.jpg"];
let locationList = ["Los Angeles", "New York", "Chicago"];
let descriptionList = [
  "We had the best time playing at Venice Beach!",
  "The atmosphere in New York is lorem ipsum.",
  "Thank you, Chicago - A night we won't forget.",
];

let index = 0;
setInterval(() => {
  if (index === imgList.length) index = 0;
  document.getElementsByClassName("band-img")[0].src = imgList[index];
  document.getElementsByClassName("performance-location")[0].textContent =
    locationList[index];
  document.getElementsByClassName("performance-description")[0].textContent =
    descriptionList[index];
  index++;
}, 3000);

for (let i = 0; i < 3; i++) {
  document
    .getElementsByClassName("buy-ticket")
    [i].addEventListener("click", () => {
      document.getElementsByClassName(
        "ticket-panel-container"
      )[0].style.display = "block";
    });
}

document
  .getElementsByClassName("close-button")[0]
  .addEventListener("click", () => {
    document.getElementsByClassName("ticket-panel-container")[0].style.display =
      "none";
  });
