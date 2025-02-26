// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let createdDate = new Date(2025, 1,26)
// console.log(createdDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate.getTime()); 

console.log(Math.floor(Date.now()/1000))

let newDate = new Date;
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());



newDate.toLocaleDateString('default',{
  weekday: "long",
})