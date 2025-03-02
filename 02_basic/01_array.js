const Arr = [1,1,2,4,5,5]
console.log(Arr[0]);

Arr.push(7)
console.log(Arr)
Arr.pop()



// Arr.unshift(8);
// console.log(Arr) //add element at 0 index
// Arr.shift() // will remove 0 index element
// console.log(Arr)


// console.log(Arr.includes(9))
// console.log(Arr.indexOf(9))

// const newArr = Arr.join()
// console.log(Arr)
// console.log(newArr) //join convert datatype into string

//++++++++++++

//slice and splice 
console.log("A " , Arr)
const myn1 = Arr.slice(1,3)
console.log(myn1);

console.log("B " , Arr)
const myn2 = Arr.splice(1,3) //it manipulate the oringinal arr unlike slice
console.log("C " , Arr)
console.log(myn2);