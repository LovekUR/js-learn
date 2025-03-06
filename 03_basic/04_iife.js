//Immediately Invoked Function Expressions (IIFE)

(function chai(){
  console.log(`DB CONNECTED`);
})(); //semi colon in end is needed otherwise it we throw an error


//other way
(() =>{
  console.log(`DB CONNECTED`);
})();

//passing parameter
((name)=>{
  console.log(`hi ${name}`);

})('love')