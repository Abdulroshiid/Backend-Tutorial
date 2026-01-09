let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanut"],
};

let isShopOpen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log(`Sorry, our shop is closed for the day!`));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.Fruits[3]} ice-cream order was placed`);
})
  .then(() => {
    return order(2000, () => {
      console.log(`The ${stocks.Fruits[3]} was cut`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`Start the machine`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`The customer selected ${stocks.holder[1]} as the holder`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(
        `The customer selected ${stocks.toppings[0]} for the topping`
      );
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.Fruits[3]} ice-cream was served`);
    });
  })
  .catch(() => {
    console.log(`Customer left`);
  });
