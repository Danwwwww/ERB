const eventEmitter = require("events")
const myEmitter = new eventEmitter()

myEmitter.on("getNews",()=>{
 console.log("Good Morning");   
})

myEmitter.on("getSport",()=>{
    let sportNews = ["football"]
    console.log(sportNews)
})

let time = 1700

time==1700?myEmitter.emit("getNews"):myEmitter.emit("getSport")