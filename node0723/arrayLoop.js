let num = [1,2,3,5,6,7,8,9]
console.log(num)

console.log("forEach(ele,index,array):ele*2")
num.forEach((e,i,arr)=>{
    e *= 2
    console.log("value "+e+"  index "+i+"  array "+arr)
})

console.log("")
console.log("let newNum = map(ele,index,array): return ele*2")
num = [1,2,3,5,6,7,8,9]
let newNum = num.map((e,i,arr)=>{
    e *= 2
    console.log("value "+e+"  index "+i+"  array "+arr)
    return e
})
console.log("newNum "+newNum)

console.log("")
console.log("let newNum = filter(ele,index): return ele>2")
num = [1,2,3,5,6,7,8,9]
newNum = num.filter((e,i)=>{
    return e>2
})
console.log("newNum "+newNum)

console.log("")
console.log("let newNum = every(ele,index): return ele>2")
num = [1,2,3,5,6,7,8,9]
newNum = num.every((e,i)=>{
    return e>2
})
console.log("return true if 'all' ele match :"+newNum)

console.log("")
console.log("let newNum = some(ele,index): return ele>2")
num = [1,2,3,5,6,7,8,9]
newNum = num.some((e,i)=>{
    return e>2
})
console.log("return true if 'one' of the ele match :"+newNum)

console.log("")
console.log("let newNum = reduce(acc,curr,index,array): return acc+curr")
num = [1,2,3,5,6,7,8,9]
newNum = num.reduce((acc,curr,i,arr)=>{
    return acc+curr
})
console.log("sum of the total:"+newNum)

console.log("")
console.log("let newNum = reduce(acc,curr,index,array): return acc+curr")
num = [1,2,3,5,6,7,8,9]
newNum = num.reduce((acc,curr,i,arr)=>{
    return acc+curr
})
console.log("sum of the total:"+newNum)
