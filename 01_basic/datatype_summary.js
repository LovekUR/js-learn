//7 Types of primitive datatype:
//string, number, boolean, null, undefined, , symbol, BigInt

const Isloggedin = false
const outsideTemp = null
let userEmail;
console.log(userEmail)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
 

//Non-primitive datatypes 
//arrays, objects and functions

const MadeForEachOther = ["lovepreet", "Nirmaan"]

let myObj = {
    name:"Lovepreet",
    age:22,
}//obj

let MyFunction = function(){
    console.log("Hello World")
}

//Note* typeof of null would be object