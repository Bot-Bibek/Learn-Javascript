var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

//Set Interval takes 2 things first is method which you want to excute
//Second one is at how many interval you want to repeat
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Followers in  Instagram";
}, 5000);
