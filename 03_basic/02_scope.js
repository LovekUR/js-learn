let a = 10
const b = 20
var c = 30//least used 


function one(){
  const username = "love"

  function two(){
    const website = "youtube"
    console.log(username)

  }
  // console.log(website);

  two()
  
}
one()//remember chotaa bde bnde se chiz mnge toh acha lgta h bda chote se toh nhi !!


//+++++++++++++ similar with if else

if(true){
  const username = "love"
  if(username === "love"){
    const website = "  youtube"
    console.log(username + website);
    
  }
  // console.log(website);
  
}
// console.log(username);



//++++++++++++++======++++++++++

 //two way or method to declare function

 function addnum(num){
  return num+1
 }
 addnum(3)// in this method you can write or call the function before initilzation 

 const addTwo = function(num1){
 return num1+2
 }
 addTwo(6)// you can't call the function before initilzation 

 