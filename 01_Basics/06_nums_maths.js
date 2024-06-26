const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
 
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.894453
console.log(otherNumber.toPrecision(5))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.8))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.sqrt(5))
console.log(Math.max(4,5,643,4,3))

console.log(Math.random())  //Will output value between 0 and 1
console.log((Math.random()*10) + 1) 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))
