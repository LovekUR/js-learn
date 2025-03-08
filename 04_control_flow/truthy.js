const useremail = "love@gmail"

if(useremail){
  console.log("got email");
  
}else{
  console.log("don't have email");
  
}

/* falsy values

false, 0,-0, BigInt (0n), "", null, undefined, NaN

*/

/* Truthy values

"0", 'false', " ", [],{}, function(){}


*/

///+++++++++++++++++++
//to check if arr is empty

if(useremail.length === 0){
  console.log("empty");
  
}

// +++++++++++++++++++++++++++
//for object
const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
  console.log("empty");
  
}

//++++++++++Note++++++++++

false == 0//will give true
false == ''//will give true
0 == '' //will give true


//++ Nullish Coalescing Operator(??) ++
let val1;
// val1 = 5 ?? 10

val1 = null ?? 10


console.log(val1);


//ternairy  operator

//syntax: condition? true:false

 //eg 
 const iceTeaPrice = 100
 iceTeaPrice<80? console.log("less than 80"): console.log("more than 80");
 
 