// // GLOBALS - NO WINDOW !!!

// // __dirname  - path to current directory
// // __filename  - file name
// // require   - function to use modules (CommonJS)
// // module   - info about current module (file)
// // process  - info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// // console.log(require);
// // console.log(module);
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// sayHi("Susan");
// sayHi(john);
// sayHi(peter);

const accessNames = require("./names.js");
const sayHi = require("./utils.js");
const addValue = require("./add-value.js");
