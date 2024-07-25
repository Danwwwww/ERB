function countDown (second){
    let interval =  setInterval(()=>{
        console.log("Remained: "+second+" second")
        second--
        if(second<0){
            clearInterval(interval)
            console.log("Time's up!")
        }
    },1000)
}

countDown(10)