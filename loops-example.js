// console.log("hello");

//1 Sum of Number

const calculateSumButtonNumberElement =
  document.querySelector("#calculator button");

function calculateSumNum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let totalSumUpNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    totalSumUpNumber = totalSumUpNumber + i;
  }

  const outputResultNumberElement = document.getElementById("calculated-sum");

  outputResultNumberElement.textContent = totalSumUpNumber;
  outputResultNumberElement.style.display = "block";
}

calculateSumButtonNumberElement.addEventListener("click", calculateSumNum);

//2 Highlight Links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// 3 Display Dummy Data

const userDummyData = {
  firstName: "Jay",
  lastName: "Jit",
  Age: 55,
  //   Hobby=['Cycling', 'Jogging', 'Gaming'],
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataUserElement = document.getElementById("output-user-data");

  outputDataUserElement.innerHTML = "";

  for (const data in userDummyData) {
    const newUserDataElement = document.createElement("li");
    const outputText = data.toUpperCase() + ": " + userDummyData[data];
    newUserDataElement.textContent = outputText;

    outputDataUserElement.append(newUserDataElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);
