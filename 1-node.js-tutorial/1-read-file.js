const { readFile } = require("fs");

console.log("Started a first task");
// CHECK FILE PATH
readFile("./folder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed the first task");
});
console.log("Started a second task");
