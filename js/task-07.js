const slider = document.querySelector(`#font-size-control`);
const span = document.querySelector("#text");

/////////////////////////////////////////////////////////// варіант 1
span.style.fontSize = `${slider.value}px`;
slider.addEventListener("input", function () {
  span.style.fontSize = `${slider.value}px`;
});

////////////////////////////////////////////////////////// варіант 2
// slider.addEventListener(
//   "mousemove",
//   () => (span.style.fontSize = `${slider.value}px`)
// );
