let eventsModule = require("events")

let eventsEmitter = new eventsModule()

let connectionHandler = () =>{
    console.log("Connected the Youtube Channel Subscription Service")
    eventsEmitter.emit("sub_channelA")
}

eventsEmitter.on("connection",connectionHandler)

eventsEmitter.on("sub_channelA",()=>{
    console.log("ChannelA got a new subscriber")
})

eventsEmitter.emit("connection")

console.log("Done")