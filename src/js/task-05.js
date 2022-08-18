const outField = document.querySelector("#name-output");
const inputField = document.querySelector("#name-input");

inputField.addEventListener(
  "input",
  (e) =>
    (outField.textContent = e.currentTarget.value
      ? e.currentTarget.value
      : "Anonymous")
);
