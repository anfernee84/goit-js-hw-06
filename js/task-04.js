const refs = {
  numField: document.querySelector("#value"),
  incButton: document.querySelector("button[data-action='increment']"),
  decButton: document.querySelector("button[data-action='decrement']"),
};
const { numField, incButton, decButton } = refs;
let currentValue = Number(0);
incButton.addEventListener("click", () => {
  currentValue++;
  numField.innerHTML = currentValue;
});
decButton.addEventListener("click", () => {
  currentValue--;
  numField.innerHTML = currentValue;
});
