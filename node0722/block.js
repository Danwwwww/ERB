const fs = require("fs")

fs.writeFileSync("content.txt","Hello World!\nWelcome to Node.js class.","utf8")

let data = fs.readFileSync("content.txt")

console.log("Loading File")
console.log(data.toString())
console.log("Loaded Content!")  