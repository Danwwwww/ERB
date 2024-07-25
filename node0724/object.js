let obj1 = {"name":"javis"}
let obj2 = {"age":12}
let obj3 = {"phone":21893271}
let obj4 = {"address":"HK"}

console.log("Object.is(obj1,obj2) "+Object.is(obj1,obj2))

console.log("Object.assign(target,obj2,obj3,obj4)")
console.log(Object.assign(obj1,obj2,obj3,obj4))


console.log("Object.keys(obj1)")
console.log(Object.keys(obj1))
console.log("Object.values(obj1)")
console.log(Object.values(obj1))
console.log("Object.entries(obj1)")
console.log(Object.entries(obj1))