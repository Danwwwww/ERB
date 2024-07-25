function average (...nums){
    try {
        if(nums.length <= 1 ){
            throw new Error("nums.length <=1")
        } else {
            let total = 0
            for(num of nums){
                total += num
            }
            return total/nums.length
        }
    } catch (error) {
        console.log("Error Catched")
        console.log(error)        
    }
}

console.log(average(1))