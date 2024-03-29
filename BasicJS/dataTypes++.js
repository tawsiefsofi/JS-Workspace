// //Primitive data types
// // String.Number,Boolean,null,undefined,symbol,BigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('202121')
const idSecond = Symbol('202121')
console.log(id === idSecond);// Output:false because of symbol

// const bigNumber: 5432423535235235n
// const bigNumber = 5432423535235235n
//Reference (Non Primitive)
//Array Objects Functions

const heros = ["Iron Man","Thor","Captian America"];
let myObj = {
    name:"Tawsief",
    age:22
}

const myFunction = function(){
    console.log("Asalamualikum");
}

console.log(typeof bigNumber);

/* Stack (Primitive), Heap(Non-Primitive) */

//Stack (Primitive)

let myYouTubeName = "tawsief.com"
let anotherName = myYouTubeName

anotherName = "tawsiefsofi.com"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email:"tawsief@gmail.com",
    upi:"ts@ybl"
}

let userTwo = userOne

userTwo.email = "tawsief@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);






