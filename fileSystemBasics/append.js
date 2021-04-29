//FS module - append file
const fs = require("fs");
const colorData = require("./assets/colors.json")

colorData.colorList.forEach(c => { //callback function c => refer to each of the colors in .json file
    //fs.appendFile = create the file if doesn't exist and append to already existing file
    fs.appendFile("./storage-file/color.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});