const { reject } = require("lodash");

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanut"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      resolve();
    } else {
      reject();
    }
  });
};
