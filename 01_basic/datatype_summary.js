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

//******************************************

// memory : Stack(primitive) and Heap(Non-primitive)


let Myname = "lovepreet"
let MyHusbandName = Myname

MyHusbandName = "Nirmaan"
console.log(Myname)
console.log(MyHusbandName)

let userOne = {
    email:"gdg@google.com",
    upi:"344443"
}
let userTwo =userOne

userTwo.email= "shdhjc@gmailcom"
console.log(userOne)
console.log(userTwo)