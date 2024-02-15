// Functions and Parameter

function sayMyName(){
console.log("T");
console.log("A");
console.log("W");
console.log("S");
console.log("I");
console.log("E");
console.log("F");
}
sayMyName()

function addTwoNumbers(number1,number2) /*Parameters*/{
console.log(number1+number2);
}
addTwoNumbers(3,4) // Arguments

const result = addTwoNumbers(3,5)
console.log("Result: ",result); // Output: Undefined

function add(number1,number2){
    let result = number1+number2
    return
}

function loginUserMessage(username){
    return`${username} just logged in`
}
console.log(loginUserMessage("Tawsief"));

// if arguments not passed

function loginUser(username){
    if(username===undefined)
    {
        console.log("Please enter username");
    }
    return
}