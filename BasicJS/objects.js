//Objects

const jsUser = {
    name: "Tawsief",
    age: 22,
    location: "Pulwama",
    email: "me.tawsief@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturdat"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // Square notation

//Symbol as Key

const mySymbol = Symbol("key1")
const jsUserTwo = {
    mySymbol:"myKey1" // cann't do like this because it will be treated as string    
}
console.log(jsUserTwo.mySymbol);
console.log(typeof jsUserTwo.mySymbol); //Output: String

//Syntax to write symbol as a key

const jsUserThree = {
    [mySymbol]: "myKey1"
}
console.log(typeof mySymbol);

//Changing values of objects

jsUser.email = "tawsief@gmail.com"
console.log(jsUser.email); // Output: tawsief@gmail.com -> cahnged from me.tawsief@gmail.com

//Using Freeze

// Object.freeze(jsUser) // now we cann't change the value in object
jsUser.email = "tawsief@outlook.com"
console.log(jsUser.email); //Output: tawsief@gmail.com ->pre value beacause of freeze

//function inside object

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`); // String Interpolation
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());