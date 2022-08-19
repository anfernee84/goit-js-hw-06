const checkForm = document.querySelector(".login-form");
console.log(checkForm);

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const pass = event.currentTarget.elements.password.value;
  if (!email || !pass) {
    alert("All credentials fill you must...");
  } else {
    console.log({ email, pass });
    event.currentTarget.reset();
  }
}
