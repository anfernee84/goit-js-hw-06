const slider = document.querySelector("input");
const span = document.querySelector("#text");

slider.addEventListener(
  "input",
  function (event) {
    span.style.fontSize = event.currentTarget.value + "px";
  },
  false
);
