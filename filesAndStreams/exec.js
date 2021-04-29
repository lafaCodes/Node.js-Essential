//create child process module with exec external system command
//handle asynchronous processes - waits for answers
const cp = require("child_process"); //cp= child process module

//cp.exec("open http://www.linkedin.com/learning");

cp.exec("node readStream", (err, data, stderr) => {

    console.log(data);
});

