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
const obj1 ={
  1: "a",
  2:"v",
}
const obj2 ={
  3: "l ",
  4:"n",
}
// const obj3 = Object.assign({}, obj1, obj2)
//{} this is target object and other are source objects

//other method 
const obj3 = { ...obj1, ...obj2}
// console.log(obj3)

//if the objecs are coming from database
const Users = [
  {
    email :"l@gmail.com",
    id :1,
  },
  {
    email :"N@gmail.com",
    id :2,
  },
  {
    email :"o@gmail.com",
    id :3,
  },
  {
    email :"m@gmail.com",
    id :4,
  },
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


//to check if some key or value exist in objectyou can use 
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}
//course.courseInstructor

const{courseInstructor : instructor} = course
console.log(instructor)


//staring of api json etc....

// {
//   "name": "hitesh",
//   "coursename": "js",
//   "price": "free"
// } 
