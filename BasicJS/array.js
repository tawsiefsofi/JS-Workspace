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

//concat
const marvelHeros = ["Hulk","Iron Man","Spiderman"]
const dcHeros = ["Superman","Flash","Batman"]

marvelHeros.push(dcHeros)
console.log(marvelHeros); // Output: [ 'Hulk', 'Iron Man', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
console.log(marvelHeros[3][1]); // Output: Flash

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros); /* Output: 
                        [
                            'Hulk',
                            'Iron Man',
                            'Spiderman',
                            [ 'Superman', 'Flash', 'Batman' ],
                            'Superman',
                            'Flash',
                            'Batman'
                        ]*/

//Spread operator

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

//Flat method
const arrayNew = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arrayNewPro = arrayNew.flat(Infinity)
console.log(arrayNewPro); // Output: [ 1, 2,3,4,5,6 7, 6, 7, 4, 5 ]

//isArray ,from, of

console.log(Array.isArray("Tawsief")); // Output: false
console.log(Array.from("Tawsief")); // Output: ['T','a','w','s','i','e','f']

//key value
console.log(Array.from({name:"Tawsief"})); // Output: [] beacaue we have to mention that print this value or this key.

let scoreA = 100
let scoreB = 200
let scoreC = 300

console.log(Array.of(scoreA,scoreB,scoreC)); // Output: [ 100, 200, 300 ]
