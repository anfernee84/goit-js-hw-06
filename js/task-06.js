const field = document.querySelector("#validation-input");

field.addEventListener("blur", handleField);

function handleField(event) {
  console.log(event);
  const input = event.currentTarget;
  console.log(event.currentTarget);
  const inputLength = Number(input.dataset.length);
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (input.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
