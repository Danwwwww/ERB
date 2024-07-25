new Promise ((resolve,reject)=>{
    throw new Error("Error Catched")
}).then(()=>{
    console.log("Program running")
}).catch((e)=>{
    console.log("Error Catched")
    console.log(e)
})
