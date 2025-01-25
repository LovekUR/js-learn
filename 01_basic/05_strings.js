const name = "Lovepreet"
const repoCount = 50

//console.log(name+ repoCount +"value")

console.log(`My name is ${name} and my repo count is ${repoCount}`)

//diffrent method to declare string

const gameName = new String('Lovepreet')
console.log(gameName[3])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('p'))

const newstring = gameName.substring(0, 5)
console.log(newstring)

const anotherstring = gameName.slice(-7,6)
console.log(anotherstring)


const newstringOne = " hitesh    "
console.log(newstringOne)
console.log(newstringOne.trim())//helps to remove all the extra space 

//something related to url

const url = "https://lovepreet.com/lovepreet%20kaur"

//if somehow we want to change the url or replace specific char with someother char we can use
console.log(url.replace('%20','*'))
