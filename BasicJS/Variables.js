const accountId = 32154255711
let accountEmail = "tawsief@gmail.com"
var accountPassword = "Abc@2121" 
// We should use let instead of var beacause of issue in block scope and function scope
accountCity = "Pulwama" // We can create a variable without defining its type ..JS will automatically recognize it on the basis of value provuded
let accountState; //If a variable is declared but not defined then its output will be undefined
 
console.table([accountId,accountEmail,accountPassword,accountCity]); // We can print desired outputs in the form of Table view using table keyword 
