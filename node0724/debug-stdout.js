import * as fs from "fs"

// setInterval(() => {
//     console.clear()
//     console.log("Testing")
//     console.info("Debuging")
//     console.warn("Warning: Something missing")
//     console.error("Error Catched") 
// }, 1000);                        //See the different in chrome dev-tool

let file = fs.createWriteStream(`./stdout-${Date.now()}.txt`)
let logger = new console.Console(file,file)

logger.log("Testing")
logger.log("Debug")



let day = new Date()
day = day.toISOString()
console.log(day)