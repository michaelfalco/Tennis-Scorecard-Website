const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "src", "index.html");
const destinationPath = path.join(__dirname, "public", "index.html");

fs.readFile(sourcePath, "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
    return;
  }

  fs.writeFile(destinationPath, data, (err) => {
    if (err) {
      console.log("Error writing file: ", err);
      return;
    }

    console.log("File successfully written!");
  });
});
