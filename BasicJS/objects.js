//Objects

const jsUser = {
    name: "Tawsief",
    age: 22,
    location: "Pulwama",
    email: "me.tawsief@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturdat"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // Square notation

//Symbol as Key

const mySymbol = Symbol("key1")
const jsUserTwo = {
    mySymbol:"myKey1" // cann't do like this because it will be treated as string    
}
console.log(jsUserTwo.mySymbol);
console.log(typeof jsUserTwo.mySymbol); //Output: String

//Syntax to write symbol as a key

const jsUserThree = {
    [mySymbol]: "myKey1"
}
console.log(typeof mySymbol);

//Changing values of objects

jsUser.email = "tawsief@gmail.com"
console.log(jsUser.email); // Output: tawsief@gmail.com -> cahnged from me.tawsief@gmail.com

//Using Freeze

// Object.freeze(jsUser) // now we cann't change the value in object
jsUser.email = "tawsief@outlook.com"
console.log(jsUser.email); //Output: tawsief@gmail.com ->pre value beacause of freeze

//function inside object

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`); // String Interpolation
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


//Singleton Object

const uberUser = new Object()
console.log(uberUser);

// Non-singleton Object

const olaUser = {}
olaUser.id = "123abc"
olaUser.name = "Rahil"
olaUser.isLoggedIn = false

// Object inside object

const regularUser = {
    email: "rahil@gmail.com",
    fullName: {
        userFullname:{
            firstName:"Tawsief",
            lastName: "Sofi"
        }
    }    
}
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullname.firstName);

// Merging OBJECTS together

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)

const obj5 = {...obj1,...obj2}


const users = [
    {
        id:12,
        email:"tawsief@gmail.com"
    },
    {
        id:12,
        email:"tawsief@gmail.com"
    },
    {
        id:12,
        email:"tawsief@gmail.com"
    },
    {
        id:12,
        email:"tawsief@gmail.com"
    },
    {
        id:12,
        email:"tawsief@gmail.com"
    }
]

users[1].email

console.log(Object.keys(uberUser));
console.log(Object.values(uberUser));
console.log(Object.entries(uberUser));

console.log(uberUser.hasOwnProperty('isLoggedIn'));

// Destructure 

const course = {
    courseName: "JS-chai aur code",
    price:"999",
    courseInstructor: "hitesh"
    }

// course.courseInstructor 

const{courseInstructor} = course
console.log(courseInstructor); // Output: hitesh

// Another way
const{courseInstructor:instructor} = course
console.log(instructor); // Output: hitesh