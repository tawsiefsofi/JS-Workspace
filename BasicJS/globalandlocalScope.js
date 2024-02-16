let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

// {} : Scope

if(true){
    let a = 10
    const b =20
    var c = 30
}
console.log(a); // Output: error -> not defined
console.log(b); // Output: error -> not defined
console.log(c); //// Output: 30

function one(){
    const username = "TS"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website); // not defined
    two()
}
one()

if(true){
    const username = "TS"
    if(username==="TS"){
        const website = "youtube"
        console.log(username+website);
    }
    console.log(website);
}
console.log(username);

// Mini Hoisting
function addOne(num){
    return num+1
}
addOne(5)

const addTwo = function(num){
    return num+2
}
addTwo(10)