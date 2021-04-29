//file system fs has rename and remove directory function as well

const fs = require("fs");

//fs.renameSync("./storage-file", "./storage"); //rename

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

//before we can use rmdir we need to make sure all the files in the dir should be removed first 
//so we read all the files within the directory using readdirSync and for all files we used unlinkSync to remove

fs.rmdir("./storage", err => { 
    if (err) {
        throw err;
    }

    console.log("./storage directory removed");
});
