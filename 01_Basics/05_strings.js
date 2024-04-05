const name = "Karan"
const repoCount = 50

console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('Karannn-Saini-qwwq')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,4) // Can't give negative values in substring
console.log(newString)

const anotherString = gameName.slice(-6,5)
console.log(anotherString)

const newStringOne = "     Karan     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://karan.com/karan%20Saini"
console.log(url.replace('%20','-'))
console.log(url.includes('karan'))
console.log(url.includes('hitesh'))
console.log(gameName.split('-'))