function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const addButton = document.querySelector("[data-create]");
const delButton = document.querySelector("[data-destroy]");
const divElts = document.querySelector("#boxes");

addButton.addEventListener("click", addButtonHandler);

function addButtonHandler() {
  const inputValue = input.value;
  createBoxes(inputValue);
}
const divs = [];
function createBoxes(number) {
  // упоротый читерский for
  for (var i = 0, size = 30; i < number; i++, size += 10) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("box");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    divs.push(div);
    console.log(div);
  }
  console.log(divs);
  divElts.append(...divs);
  divs.length = 0;
}

delButton.addEventListener("click", delButtonHandler);
function delButtonHandler() {
  document.querySelectorAll(".box").forEach((e) => e.remove());
}
