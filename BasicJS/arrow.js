const user = {
    username: "Tawsief",
    price:9999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "TS"
user.welcomeMessage()

console.log(this); // Output: {} --empty

function chai(){
    console.log(this);
}
chai()

function tea(){
    let username = "TS"
    console.log(this.username);
}
tea()

const chai = function(){
    let username = "Aasif"
    console.log(this.username);
}
chai()

//Explicit return
const addTwo = (num1,num2) =>{
return num1+num2
}
console.log(addTwo(3,5));

// Implicit return
const adder = (num1,num2) => num1+num2
console.log(adder(5,7));

const printName = (num1,num2) => ({username:"TS"})
console.log(printName());