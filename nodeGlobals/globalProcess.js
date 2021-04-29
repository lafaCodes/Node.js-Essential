//Process object can be accessed globally 
//it contains info about current process as well as tools to interact with that object
//get env info, variables, communicate with terminal or parent process
//collect info from terminal when we load the app - process.argv 
//console.log(process.pid); //pid-process id
//console.log(process.argv);
//const [, , firstName, lastName] = process.argv;

//console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`) ;