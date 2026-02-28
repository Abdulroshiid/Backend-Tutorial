const path = require("path");

console.log(path.sep);

const filePath = path.join("/Path-folder", "Sub-folder", "text.txt");
console.log(filePath);

const baseName = path.basename("text.txt");
console.log(baseName);

const absolute = path.resolve(
  __dirname,
  "Path-folder",
  "Sub-folder",
  "text.txt"
);

console.log(absolute);
