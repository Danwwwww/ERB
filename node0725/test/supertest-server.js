import * as http from "http"

let server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/plain"
    })
    res.end("Welcome to http server.")
})
server.listen(8000)

export {server}