const slider = document.querySelector("input");
const span = document.querySelector("#text");
// console.log(slider);
// console.log(span);
slider.addEventListener(
  "input",
  function () {
    span.style.fontSize = `${slider.value}%`;
    // console.log(span);
  },
  false
);
