const myName = "jay";

if (myName === "jay") {
  console.log("Hello");
}

const isLoggedIn = true; //boolean statement store in variable

if (!isLoggedIn) {
  //is LoggedIn === false or !isLoggedIn
  console.log("user is not logged in!");
}

if (isLoggedIn) {
  console.log("user is logged in!");
}

const enteredUserName = "JayMervin";

if (enteredUserName.length > 0) {
  console.log("Input is valid");
}

const loggedInUser = {
  name: "Jay",
  age: 27,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  // console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
  // isFinished = confirm("Do you want to leave?");
}
console.log("Done");
