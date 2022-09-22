let imgTag = document.getElementsByTagName("img");

// console.log(imgTag);

let flag = false; // true : on bulb

function changeBulb() {
  if (flag) {
    imgTag[0].setAttribute("src", "../img/2.jpg");
    flag = false;
  } else {
    imgTag[0].setAttribute("src", "../img/1.jpg");
    flag = true;
  }
}
