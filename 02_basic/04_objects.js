const tinderUser = new Object() //this is singlton
//same like is you can use
//const tinderUser = {} 


tinderUser.id = "123bcs"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname:{
      firstname: "love",
      lastname: "kaur" ,
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname)

// combining objects