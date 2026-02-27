// TARGETING THE IN-BUILT FILE SYSTEM MODEL (FS-MODEL)

const { readFile, writeFile } = require("fs").promises;

//CREATING AN ASYNC/AWAIT PROMISE

const readAndWriteFile = async (firstPath, secondPath) => {
  try {
    // Read two files first, wrote one and read it again...
    const readFirstFile = await readFile(firstPath, "utf-8");
    console.log(readFirstFile);

    const readSecondFile = await readFile(secondPath, "utf-8");
    console.log(readSecondFile);

    // Wrote the file and read it here...
    await writeFile(
      "./content/sub-folder/dashboard.txt",
      `Testing if this could work... Then to the highest :)`,
      "utf-8",
    );
    const readThirdFile = await readFile(
      "./content/folder/sub-folder/dashboard.txt",
    );
    console.log(readThirdFile);
  } catch (error) {
    console.log(error);
  }
};

readAndWriteFile("./folder/first.txt", "./folder/second.txt");
