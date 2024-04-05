// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof(myDate))

let myCreatedDate = new Date(2024,3,5,11,17,0)
let myCreatedDate1 = new Date("2024-04-05")
let myCreatedDate2 = new Date("04-05-2024")
console.log(myCreatedDate1.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))