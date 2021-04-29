//read directory

const fs = require("fs"); //fs module

fs.readdir("./assets", (err, files) => { //read the content of the dir by fs.readdirSync
  if (err) {
        throw err;
  }
  console.log("complete");
  console.log(files);
});

console.log("started reading files");
