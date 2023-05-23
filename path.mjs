import path from "path";

const file = "Users/Prico/Downloads/test.txt" // paste your address here

console.log("Directory Name: " + path.dirname(file))
console.log("Basename: " + path.basename(file))
console.log("Extension: " + path.extname(file))
