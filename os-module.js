const os = require("os");

// const user = os.userInfo();
const user = os.uptime();

// console.log(`The computer current uptime is ${user}.`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs.name);
console.log(currentOs.release);
console.log(currentOs.totalMem);
console.log(currentOs.freeMem);
