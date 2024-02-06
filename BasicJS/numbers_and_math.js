//Numbers and Maths

const score = 400
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.896

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));

// ************** Maths portion ************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,1,2));
console.log(Math.max(4,5,6,1,2));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1) ) + min)







