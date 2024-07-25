import * as assert from "assert"
import {add,multiply} from "./cal-main.js"

describe("Calculator Test",()=>{
    describe("Addition Test",()=>{
        it("returns 1 + 1 = 2",function(done){
            assert.equal(add(1,1),2)
            done()
        })
        it("should returns 1 + -1 = 0",function(done){
            assert.equal(add(1,-1),0)
            done()
        })
    })

    describe("Mutliplication Tests",()=>{
        it("return 2 * 2 = 4", function(done){
            assert.equal(multiply(2,2),4)
            done()
        })
        it("return 0 * 4 = 0",function(done){
            assert.equal(multiply(0,4),0)
            done()
        })
    })
})