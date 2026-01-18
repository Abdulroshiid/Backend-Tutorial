// const { reject } = require("lodash");

const { reject } = require("lodash");

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

// const guessNumberPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.floor(Math.random() * 10);
//   console.log(randomNumber);

//   setTimeout(() => {
//     if (randomNumber > 5) {
//       resolve("Nice One!");
//     } else {
//       reject("Opps! Keep guessing man!");
//     }
//   }, 4000);
// });

// console.log(guessNumberPromise);

// guessNumberPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Make Eba

const boilWater = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isWaterHot = true;
      if (isWaterHot) {
        resolve(`Get ready to pour the G4!`);
      } else {
        reject(`Water is not yet hot to pour G4!, try reboiling again`);
      }
    }, 5000);
  });
};

const readyToPourG4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pourG4 = true;
      if (pourG4) {
        resolve(`Pour the G4 into the boiling water`);
      } else {
        reject(`There is no G4 left in the store`);
      }
    }, 5000);
  });
};

const stiringProccess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stirG4 = true;
      if (stirG4) {
        resolve(`Stir the Eba `);
      } else {
        reject(`There is no turning stick available.`);
      }
    }, 5000);
  });
};
