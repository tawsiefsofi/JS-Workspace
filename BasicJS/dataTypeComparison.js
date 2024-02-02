/* Here we will compair the datatypes*/
//Basic Comparison
console.log(2==2);
console.log(2>1);
console.log(2<1);
console.log(2>=2);

//In this conversion few problems occur
console.log("2" == 2);
console.log("2" > 2);//here the string will be converted into number.

//null and undefined comparison
console.log(null == 0);
console.log(null > 0);
console.log(null <= 0); //null will be converted to zero.

console.log(undefined = 0);
console.log(undefined > 0);
console.log(undefined >= 0);
//In undefined all three condtions will be false.

//Strict Check : It compairs the dataType (===)

console.log("5" === 5); // Output : false because it will comapair datatype of both.


