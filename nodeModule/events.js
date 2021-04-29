//EventEmitter - gives a mechanism for emitting custom events and wiring up listeners and handlers for those events.
// - gives a way to raise and handle custom events.
//- asynchronous - these events are raised when they happen.
const events = require("events");

const emitter = new events.EventEmitter(); //instance of emitter

emitter.on("customEvent", (message, user) => { //handle custom events
    console.log(`${user}: ${message}`);
}); 

//emitter.emit - raise custom event 
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process"); //process said "Goodbye!"
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});