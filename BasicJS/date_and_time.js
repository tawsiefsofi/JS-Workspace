//Date and Time

/*===========   Date    ==========*/

let myDate = new Date()
console.log(myDate); // Output: 2024-02-07T11:13:24.445Z

console.log(myDate.toString()); // Output: Wed Feb 07 2024 11:14:01 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString); // Output: [Function: toDateString]
console.log(myDate.toISOString()); // Output: 2024-02-07T11:22:42.956Z
console.log(myDate.toJSON()); // Output: 2024-02-07T11:23:06.736Z
console.log(myDate.toLocaleString()); // Output: 2/7/2024, 11:19:19 AM
console.log(myDate.toLocaleTimeString()); // Output: 11:19:19 AM


 console.log(typeof myDate); // Output: Object

 let myCreatedDate = new Date(2024,1,7)
 console.log(myCreatedDate); // Output: 2024-02-07T00:00:00.000Z

 /*===========   Time    ==========*/

 let myTimeStamp = Date.now()
 console.log(myTimeStamp); //Output: 1707305186435

 console.log(Math.floor(Date.now()/1000)); //Output: 1707305261

 let newDate = new Date()
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDate());
 console.log(newDate.getDay());

 console.log(newDate.toLocaleString('default',{
    weekday: "long"
 }))