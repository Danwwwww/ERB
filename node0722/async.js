async function example (){
    try {
        return console.log("Hello World")
    } catch (error) {
        throw new Error ("Error Catched")
    }
}

example()

async function newExample(){
return "Hello"
}
// async function newExample(){
// throw new Error("Error Catched2")
// }

newExample().then((value)=>console.log(value))
.catch((error)=>console.log(error))