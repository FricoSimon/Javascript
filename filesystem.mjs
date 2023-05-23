import fs from "fs/promises";

const buffer = await fs.readFile("hello.txt"); // put your file here
console.log(buffer.toString());

const writeFile = fs.writeFile("temp.txt", "write file successfully") // create a new file
const copyFile = await fs.copyFile("temp.txt", "temp copy.txt") // copy a file
const deleteFile = await fs.unlink("temp copy.txt") // delete a file
const checkFile = await fs.stat("temp.txt") // checking stat of a file

console.log("Is file: " + checkFile.isFile())
console.log("Is directory: " + checkFile.isDirectory())
