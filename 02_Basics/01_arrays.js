// Array 

const myArray = [0,1,2,3,4,5]
const superHeroes = ["shaktiman", "Nagraj"]

const myArray2 = new Array(1,2,3,4,5)
console.log(myArray[3])

// Array Methods

myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)

myArray.unshift(9)
myArray.unshift(10)
console.log(myArray)
myArray.shift()
myArray.shift()
myArray.shift()
myArray.shift()

console.log(myArray)

console.log(myArray.includes(9))
console.log(myArray.indexOf(9))

const newArr = myArray.join()
console.log(newArr)
console.log(typeof(newArr))
console.log(myArray)
console.log(typeof(myArray))

// Slice Splice

console.log("A ", myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)
// console.log(myArray)

console.log("B ",myArray)
const myn2 = myArray.splice(1,3)
console.log("C ",myArray)
console.log(myn2)

//Main differnce between Slice and Splice is that Slice don't manipulate the original array while slicing whereas
// Splice removes the demanded portion form the original array
