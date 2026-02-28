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
          `I wrote the file and read it... Isn't that nice?? From fourth txt btw ):`,
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
          },
        );
      }
    });
  }
});
