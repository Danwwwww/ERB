import * as server from "./supertest-server.js"
import * as http from "http"
import * as assert from "assert"


it("should return Welcome to http server",(done)=>{
    http.get("localhost:8000",(res)=>{
        res.setEncoding("utf8")
        res.on("data",(text)=>{
            assert.equal(res.statusCode,200);
            assert.equal(text,"Welcome to http server");
            done()
        })
    })
})