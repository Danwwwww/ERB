let arr1 = [1,2,3],arr2 = [4,5,6]
console.log("[...arr1,...arr2] "+[...arr1,...arr2])

let str = "123456"
console.log("let str = '123456'\n[...str] "+[...str])

function pushArr (arr,...eles){
    for(let e of eles){
        arr.push(e)
    }
    return arr
}
let exampleArr = []
console.log("pushArr() "+pushArr(exampleArr,1,2,3,4,5,6))
console.log("pushArr.name，取得function name: "+pushArr.name)
