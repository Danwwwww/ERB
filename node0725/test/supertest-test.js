import request  from "supertest";
import {server} from "./supertest-server.js"
import * as assert from "assert"

it("should return Welcome to http server.",(done)=>{
    request(server)
    .get("/")
    .expect(200)
    .expect((res)=>{
        assert.equal(res.text,"Welcome to http server.")
    })
    .end(done)
})