//Strings
/*Denoted by "" and '' */

"hello" + "World!" // concat
 
const name = "Tawsief"
const repoCount = 50
console.log(name+" "+repoCount); // Old way to do this

//String Interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`); //using back ticks

const getName = new String('Tawsief')
console.log(getName[0]);
console.log(getName.__proto__);

//Objects of String

console.log(getName.toUpperCase()); //Original will not get changed (Stack & Heap Concept)
console.log(getName.length);
console.log(getName.charAt(2));
console.log(getName.indexOf('a'));

const newString = getName.substring(0,5)
console.log(newString);

const anotherString = getName.slice(4)
console.log(anotherString);

const stringTrim = "    Hello World!   "
console.log(stringTrim);
console.log(stringTrim.trim());

const url = "tawsief%20sofi.com"
console.log(url.replace('%20','-'));
console.log(url.includes('sofi'));

