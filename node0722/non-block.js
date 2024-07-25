let fs = require("fs")

console.log("Loading File...")
fs.readFile("content.txt",(err,data)=>{
    if(err){
        return console.log("Error: ",err)
    }
    console.log(data.toString())
})

console.log("Loaded Content")