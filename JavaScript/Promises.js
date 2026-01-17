// const { reject } = require("lodash");

// function doSomething() {
//   return new Promise((resolve, reject) => {
//     const checkScenario = true;
//     if (checkScenario) {
//       resolve(`It went well`);
//     } else {
//       reject(`Opps! It went totally wrong.`);
//     }
//   });
// }
// console.log(doSomething());

const guessNumberPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);

  setTimeout(() => {
    if (randomNumber > 5) {
      resolve("Nice One!");
    } else {
      reject("Opps! Keep guessing man!");
    }
  }, 4000);
});

console.log(guessNumberPromise);

guessNumberPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
