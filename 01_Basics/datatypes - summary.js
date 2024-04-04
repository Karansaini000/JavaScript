// There are two ways in which memory is Accessed and used 
// 1. Primitive 
// 2. Non - Primitive

// (Pass By Value) Primitive :

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue)

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bignumber = 39040934309243n

// (Pass By Reference) Non - Primitive:

// Array, Objects and Functions

const heros = ["Shaktiman" , "nagraj", "doga"]
let myObj = {
    name: "Karan",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof bignumber);
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);

