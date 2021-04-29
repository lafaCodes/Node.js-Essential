//create child process with spawn

const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]); //cp.spawn("command", ["array"]);
//can communicate with stdin or stdout

//send data to our spawn process using stdin
questionApp.stdin.write("Roshan \n");
questionApp.stdin.write("Lalor \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", (data) => { //asynchronous app - stay open until ans are provided
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});