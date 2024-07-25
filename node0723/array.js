let str = "123456789"

console.log("let str = "+str)
console.log('split(""):'+str.split(""))
console.log("")

let num1=[1,2,3],num2=[4,5,6]

console.log("let num1: "+num1,"num2: "+num2)
console.log("不會改原arr:"+num1.concat(num2))
console.log("")

let num = [1,2,3,4,5,6,7,8,9,10]
console.log("let num = "+num)

console.log("push放在console.log入面return new Length: "+num.push(11))
console.log("push:"+num)

num = [1,2,3,4,5,6,7,8,9,10]

console.log("pop放在console.log入面return new Length: "+num.pop())
console.log("pop:"+num)


num = [1,2,3,4,5,6,7,8,9,10]

console.log("shfit放在console.log入面return已移除Length: "+num.shift())
console.log("shfit:"+num)


num = [1,2,3,4,5,6,7,8,9,10]

console.log("unshfit放在console.log入面return new Length: "+num.unshift(11))
console.log("unshfit:"+num)

num = [1,2,3,4,5,6,7,8,9,10]

console.log("splice(3,3)放在console.log入面return已刪除的ele: "+num.splice(3,3))
console.log("splice:"+num)

num = [1,2,3,4,5,6,7,8,9,10]

console.log("slice(1,3)放在console.log入面return已刪除的ele: "+num.slice(1,3))
console.log("slice不會改原arr:"+num)

console.log("")

let str1 = "character"

console.log("let str = "+str1)
console.log("str.split('').sort():"+str1.split("").sort())

let num3 = [5,3,8,6,3,79,10,57]

console.log("let num = "+num3)
console.log("小至大 num3.sort((a,b)=>a-b):"+num3.sort((a,b)=>a-b))
console.log("大至小 num3.sort((a,b)=>b-a):"+num3.sort((a,b)=>b-a))

num3 = [5,3,8,6,3,79,10,57]
console.log("reverse():"+num3.reverse())


