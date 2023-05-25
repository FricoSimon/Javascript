import readLine from "readline"
import { stdin, stdout } from "process" // destructuring object to make it easier

const input = readLine.createInterface({
    input: stdin, // input
    output: stdout // output
})

input.question("Masukkan nama: ", name => {
    console.log(`Hello ${name}! Welcome to readline!`);
    input.close(); // close the question
})

