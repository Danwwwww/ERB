const express = require("express")
const app = express()

 let person = {
        "name":"Ann",
        "sex":"female",
        "age":11,
        "Phone number":"12345678"
    }

app.get("/",(req,res)=>{
    res.send(person)
    console.log("Data transfer sucessfully!")
})

cd
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})