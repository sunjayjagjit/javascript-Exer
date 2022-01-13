// console.log("Hello Jay");

let paElement = document.querySelector("p");

function changedParagraphText() {
  paElement.textContent = "clicked!";
}
paElement.addEventListener("click", changedParagraphText);

let inputElement = document.querySelector("input");

function userInputElement(event) {
  //   let enteredText = inputElement.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  //   console.log(event);
}

inputElement.addEventListener("input", userInputElement);
