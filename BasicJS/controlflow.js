const score = 2000

if(score>100)
{
    let power = "fly"
    console.log(`user power:${power}`);
}

// Short hand notation

const balance = 1000
if(balance>500) console.log("Sufficent Balance"); // Impilicent
else{
    console.log("Insufficent Balance");
}

// Nesting

if(balance<500)
{
    console.log("less than 500");
}