const slider = document.querySelector(`#font-size-control`);
const span = document.querySelector("#text");

span.style.fontSize = `${slider.value}px`;
/////////////////////////////////////////////////////////// варіант 1
// slider.addEventListener(
//   "input",
//   () => (span.style.fontSize = `${slider.value}px`)
// );

////////////////////////////////////////////////////////// варіант 2
// slider.addEventListener(
//   "mousemove",
//   () => (span.style.fontSize = `${slider.value}px`)
// );

////////////////////////////////////////////////////////// варіант 3
slider.addEventListener("input", function (event) {
  span.style.fontSize = `${slider.value}px`;
});
