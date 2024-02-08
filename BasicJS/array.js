//Array 

const myArr = [0,1,2,3,4,5]

const myHeros = ["Iron Man","Captain America","Thor"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0]);

//Methods 

myArr.push(6) //Adds an element to an array
console.log(myArr);

myArr.pop() //deletes last of an array
console.log(myArr); 

myArr.unshift(5) //Adds an element at the starting of an array
myArr.shift()

console.log(myArr.includes(9)); //Output: false
console.log(myArr.indexOf(3)); //Output: 3

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

//Slice and Splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);
