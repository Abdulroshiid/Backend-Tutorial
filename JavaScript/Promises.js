const { reject } = require("lodash");

function doSomething() {
  return new Promise((resolve, reject) => {
    const checkScenario = true;
    if (checkScenario) {
      resolve(`It went well`);
    } else {
      reject(`Opps! It went totally wrong.`);
    }
  });
}
console.log(doSomething());

function guessNumberPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);

    setTimeout(() => {
      if (randomNumber < 10) {
        resolve("You guessed number 5 correctly and its' the right number!");
      } else {
        reject("Opps! Keep guessing man!");
      }
    }, 4000);
  });
}

console.log(guessNumberPromise());
