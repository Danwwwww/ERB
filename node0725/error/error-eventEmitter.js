import events from "events"

const emitter = new events.EventEmitter() //OR const emitter = new events()

emitter.addListener("err",(e)=>{
    console.log("Error Catched")
    console.log(e)
})

function average (...nums){
        if(nums.length <= 1 ){
            emitter.emit("err",new Error("nums.length <=1"))
        } else {
            let total = 0
            for(num of nums){
                total += num
            }
            return total/nums.length
        }
}

console.log(average(1))