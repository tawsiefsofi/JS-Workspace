// Immediately Invoked Function Expressions(IIFE)



function chai(){
    console.log(`DB CONNECTED`);
}
chai();

// named IIFE
(function code(){
console.log(`DB CONNECTED SUCCESSFULLY`);
})();

// Unamed IIFE 
(()=>{
    console.log(`CONNECTION SUCCESSFUL`);
})();

// Passing Values

( (dbname) => {
console.log(`${dbname} CONNECTED SUCCESSFULLY`);
})('firebase')