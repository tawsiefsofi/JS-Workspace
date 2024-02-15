
function calculateCartPrice(num1){
    return num1
} 
console.log(calculateCartPrice(2));

// Rest operator

function cartPrice(...num1){
    return num1
}
console.log(cartPrice(200,400,500))

const user = {
    username:"Tawsief",
    price:1999
}

function handleUser(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
}
handleUser()

handleUser({
    username:"Aasif",
    price:99999
})
const myArray = [230,500,600,700]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray));