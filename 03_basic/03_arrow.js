const user = {
  username: "love",
  price:200,
  welcomMessage: function(){
    console.log(`${this.username} , welcome to website`);

    console.log(this)
  }
}

// user.welcomMessage()

// user.username= "sam"

// user.welcomMessage()

console.log(this);


//++++++++++++++++++++++++++++++++++++++

// function chai(){
//   let username = "love"
//   console.log(this.username);
// }
// chai()

// const chai = () =>{
//   let username = "love"
//   console.log(this.username);
// }
// chai()

// +++++++++++++++++++++++++++++++++++++++

// const  addTwo = (num1, num2) =>{
//   return num1+num2
// }


//other method
// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(2,4));

//one more method 
const addTwo = (num1,num2) => (num1+num2)





