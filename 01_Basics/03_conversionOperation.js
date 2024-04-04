let score = "33abc"
let newScore = null // Ouput => 0
let newScore1 = undefined // Output => NaN
let newScore2 = true // Output => 1

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
let valueInNumber2 = Number(newScore2)


console.log(typeof(valueInNumber))
console.log(valueInNumber) // "33abc" output => NaN
console.log(valueInNumber) // "33" output => 33

let isLoggedIn = "" // False in Empty string and true in non empty
let boolIsLoggedIn = Boolean(isLoggedIn)

console.log(boolIsLoggedIn);

