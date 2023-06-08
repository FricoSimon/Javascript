const buffer = Buffer.from("katak");
const check = buffer.equals.toString("katak");

if (check) {
    console.log("Palindrome");
} else {
    console.log("Error");
}

const encoding = Buffer.from("Friko", "utf-8");
console.log(encoding.toString("hex"));
console.log(encoding.toString("base64"));
console.log(encoding.toString("ascii"));