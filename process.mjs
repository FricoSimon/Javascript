import process, { exitCode } from "process";

// listener
process.on("exit", (exitCode) => {
    console.log(`Node.js exit with ${exitCode}`);
})

// process detail
console.log("Node.js version = " + process.version);
console.table(process.argv);

// process is defined already unlike event emitter 
process.exit(1)

console.log("This won't appear!");