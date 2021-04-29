//file system fs has rename and remove file function as well

const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

fs.rename("./assets/notes.md", "./storage-file/notes.md", err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);