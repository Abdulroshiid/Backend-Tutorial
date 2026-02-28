const http = require("http");
const fs = require("fs");
const { error } = require("console");
const PORT = 5000;

const server = http.createServer(function (req, res) {
  const fileStream = fs.createReadStream(
    "./folder/sub-folder/dashboard.txt",
    "utf-8",
  );
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(PORT);
