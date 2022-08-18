const field = document.querySelector("#validation-input");
field.addEventListener("blur", (a) => {
  const input = a.currentTarget;
  const extreme = Number(input.dataset.length);
  switch (input.value.length) {
    case input.value.length < extreme:
      input.classList.remove("valid");
      input.classList.add("invalid");
      break;
    case input.value.length > extreme:
      input.classList.remove("valid");
      input.classList.add("invalid");
      break;
    case input.value.length === extreme:
      input.classList.remove("invalid");
      input.classList.add("valid");
      break;
    case input.value.length === 0:
      input.classList.remove("invalid");
      input.classList.remove("valid");
      break;
    default:
      break;
  }
});

// field.addEventListener("blur", (a) => {
//   const input = a.currentTarget;
//   const inputLength = Number(input.dataset.length);
//   if (input.value.length === inputLength) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// });
