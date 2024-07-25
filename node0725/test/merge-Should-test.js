import * as should from "should"
import { merge } from "./merge-main.js"

describe("Merge with two param",()=>{
    it("should success",()=>{
        let obja = {
            "name":"Chan Tai Man",
            "address":"Cheung Sha Wan,KLN" 
        }
        let objb = {
            "age":"32",
            "phone":{
                "home":"37218973",
                "mobile":"98273917",
                "office":"38273821"
            }
        }
        let newObj = merge(obja,objb)
        newObj.should.have.property("name","Chan Tai Man")
        newObj.should.have.propertyByPath("phone","home").equal("37218973")
    })

    it("should return undefined",()=>{
        let obja = {
            "name":"Chan Tai Man",
            "address":"Cheung Sha Wan"
        }
        let newObj = merge(obja);
        (typeof newObj).should.equal("undefined")
    })
})