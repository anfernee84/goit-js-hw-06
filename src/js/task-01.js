// const bodyElement = document.body;
// console.log(bodyElement);
// const lastChild = bodyElement.lastChild;
console.log("Number of categories:", document.querySelectorAll(".item").length);
console.log("\n");
const ulElements = document.querySelector("#categories");
// console.log(ulElements.nextSibling);
// console.log(ulElements.childNodes);
// console.log(document.querySelectorAll(".item"));
// console.log(ulElements.children);
for (let el of ulElements.children) {
  console.log("Category:", el.firstElementChild.innerHTML);
  console.log("Elements:", el.lastElementChild.children.length);
  console.log("\n");
}
// for (let el of ulElements.children) {
//     console.log("Category:", el.firstElementChild.textContent);
//     console.log("Category:", el.lastElementChild.children.length);
//   }
