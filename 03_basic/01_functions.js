function sayMyName(){
  console.log("l");
  console.log("o");
  console.log("v");
  console.log("e");
}

// sayMyName //this is reffrence
// sayMyName() //this is execution

 //++++++++++++++++++++++++++

// function addTwoNum(num1, num2)
// {
//   console.log(num1+num2);

// }
// addTwoNum(4,8)

// other method 
function addTwoNum(num1, num2)
{
let result = num1+num2
return result
//or you can do  simply
//return num1 + num2
}

const result = addTwoNum(7,9)
console.log("Result: ", result)

function loginUserMessage(username = "sam"){
  if(!username){
    console.log("Please enter a username");
    return 
  }

  return `${username} just logged in`

}
console.log(loginUserMessage("love"))

function calculateCartprice(...num1){
  return num1

}
console.log(calculateCartprice(220,700,60))

const user = {
  username: "love",
  price:200
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
// handleObject(user)
// other way is handleObject({
//              username: "love",
//              price: 200
//})


//++++++++++
//for array

const NewArr = [7,8,9,33]

function returnSecondValue(getarray){
  return getarray[1]
}
console.log(returnSecondValue(NewArr))