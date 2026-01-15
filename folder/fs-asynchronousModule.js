const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(err);
    return;
  } else {
    console.log(result);
    readFile("./folder/second.txt", "utf8", (error, result) => {
      if (error) {
        console.log(err);
        return;
      } else {
        console.log(result);
        writeFile(
          "./folder/fourth.txt",
          `I created a file using the asyncronous fs method`,
          "utf8",
          (error, result) => {
            if (error) {
              console.log(error);
              return;
            } else {
              readFile("./folder/fourth.txt", "utf8", (error, result) => {
                if (error) {
                  console.log(error);
                  return;
                } else {
                  console.log(result);
                }
              });
            }
          }
        );
      }
    });
  }
});
