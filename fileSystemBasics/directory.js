//directory creation

const fs = require("fs");

//check if the directory exist 
if (fs.existsSync("storage-file")) {
    console.log("Already exist");
} else {
    //fs.mkdir - create directory
    //fs.mkdir("name of the directory", callback handeller)
    fs.mkdir("storage-file", err => {

        if (err) {
            throw (err);
        }

        console.log("directory created");
    });
    
}
