let buttons = document.querySelector(".button");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

console.log(btn);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    if (this.innerText === '=') {
      value.innerText = eval(value.innerText);
    } else {
      if (this.innerText === "clear") {
        value.innerText = "";
        console.log(value);
      } else {
        value.innerText += this.innerText;
      }
    }
  });
}
