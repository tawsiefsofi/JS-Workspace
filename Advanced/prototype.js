// let myName = "tawsief     "
// let mychannel = "ts-yt     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ts = function(){
    console.log(`ts is present in all objects`);
}

Array.prototype.heyts = function(){
    console.log(`ts says hello`);
}

// heroPower.ts()
// myHeros.ts()
// myHeros.heyts()
// heroPower.heyts()

// inheritance

const User = {
    name: "ts",
    email: "ts@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "tsofi     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
