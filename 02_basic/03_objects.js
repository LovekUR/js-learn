//singleton typpe is creted if you use object.create 

//otherwise

//object literals
const mySym = Symbol("Key1")

const JsUser = {
  name : "love",
  age: 20,
  [mySym]: "mykey1",//for  symbol correct symbol is this
  location: "punjab",
  email: "love@gmail.com",
  isLoggedIn: false,
  lastLoginDays:["monday", "Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"]) //better way 
console.log(JsUser[mySym])


//you can overwrite email using =
//eg
JsUser.email = "maan@gmail.com"

//to make freeze you can use syntax like this
// Object.freeze(JsUser) //now u can't change this

JsUser.greeting = function(){
  console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
  console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
