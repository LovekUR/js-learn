const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)


// other method
all_heroes= marvel_heros.concat(dc_heros)
console.log(all_heroes)

//spread method

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

//if you have array in array and want to get element seprately use flat

const another_array = [1,3,5 ,[7,8,9], 8,9,[5,6,7,[6,7]]]
const real_arr = another_array.flat(Infinity)//here infinity is to which depht you want to access element here depth is 2 but for easyness you can use infinity
console.log(real_arr)

//to check if i is aarray or not
console.log(Array.isArray("love"))
//to convert it to arr
console.log(Array.from("love"))

//for object it give empty array
console.log(Array.from({name:"love"}))

//for multiple values
let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3))