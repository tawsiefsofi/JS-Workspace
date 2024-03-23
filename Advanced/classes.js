// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const profile = new User("ts", "ts@gmail.com", "123")

console.log(profile.encryptPassword());
console.log(profile.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const userProfile = new User("tsofi", "tsofi@gmail.com", "123")

console.log(userProfile.encryptPassword());
console.log(userProfile.changeUsername());
