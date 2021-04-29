//read file

const fs = require("fs");

//readFileSync = synchronously 
//-> this is going to block - wait until we read the content of file before executing any more code

//const text = fs.readFileSync("./assets/Readme.md", "UTF-8"); //UTF-8 - encoding of file

//readFile = asynchronous way of reading file
// -> once the content of the file has been read, we can pass those contents to a callback function
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => { //first variable of the callback funtion is err -> will be null if there aren't any errors
    console.log("file contents read");                                                        //second arguement is the text that we're actually reading
    console.log(text);
});

fs.readFile("./assets/alex.jpg", (err, img) => { //first variable of the callback funtion is err -> will be null if there aren't any errors
    
    if (err) {
        console.log(`An error has occured: $err.messager`);
        process.exit();
    }

    console.log("file contents read");                                                        //second arguement is the img that we're actually reading
    console.log(img);
});

//output => buffer 