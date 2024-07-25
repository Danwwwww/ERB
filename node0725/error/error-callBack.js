import fs from "fs"

fs.mkdir("/dir",(e)=>{
    if(e){
        console.log("Error Catched")
        console.log(e)
    }else{
        console.log("Create Dir")
    }
})

// fs.mkdir("./demo",(e)=>{
//     if(e){
//         console.log("Error Catched")
//         console.log(e)
//     }else{
//         console.log("Create Dir")
//     }
// })