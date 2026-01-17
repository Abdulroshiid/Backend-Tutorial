function doSomething() {
  return new Promise((resolve, reject) => {
    const checkScenario = false;
    if (checkScenario) {
      resolve(`It went well`);
    } else {
      reject(`Opps! It went totally wrong.`);
    }
  });
}
console.log(doSomething());
