//readable file streams
//stream interface - technique to read and write data 
//to files, to communicate with the internet, to communicate with other processes. (from terminal)
const fs = require ("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");    

let fileTxt = "";

console.log("type something...");
readStream.on("data", data => { //readable streams
    console.log(`I read ${data.length - 1} characters of text`);
    fileTxt += data;
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("finished reading file");
    console.log(`In total I read ${fileTxt.length -1} characters of text`);
});