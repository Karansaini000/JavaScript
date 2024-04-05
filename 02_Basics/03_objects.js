// Singleton

// Object Literals

const mySum = Symbol("key1")

const Jsuser = {
    name: "karan",
    "full name" : "Karan Saini",
    [mySum] : "Key1",
    age: 19,
    location: "Jaipur",
    email: "karan489@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]

}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mySum])
console.log(typeof mySum)

Jsuser.email = "Karan334@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "dksfjkl@gmail.com"
console.log(Jsuser.email)

Jsuser.greeting = function(){
    console.log("Hello JsUser")
}

Jsuser.greetingTwo = function(){

    console.log(`Hello JsUser,  ${this.name}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())