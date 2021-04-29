//writable file streams - process.stdout - write stream -> use write() method to write data in writable stream
//process.stdout.write("hello"); //output- hello
const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8"); //path, encoding
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

readStream.pipe(writeStream);
//pipe() readStream to writeStream