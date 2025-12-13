const { readFileSync, writeFileSync } = require("fs");

const readFirstFile = readFileSync("./folder/first.txt", "utf8");
const readSecondFile = readFileSync("./folder/second.txt", "utf8");

console.log(readFirstFile);
console.log(readSecondFile);

writeFileSync(
  "./folder/third.txt",
  "Hello, I just created the third file using writeFileSync"
);
const readThirdFile = readFileSync("./folder/third.txt", "utf8");

console.log(readThirdFile);
