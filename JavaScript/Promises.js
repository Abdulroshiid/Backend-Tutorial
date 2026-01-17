const promise = (resolve, reject) => {
  const checkScenario = true;
  if (checkScenario) {
    resolve(`It went well`);
  } else {
    reject(`Opps! It went totally wrong.`);
  }
};

console.log(promise);
