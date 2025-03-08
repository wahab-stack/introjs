// singleton

// object literals (declearing objects)

const mySym = Symbol("key1")

const jsUser = {
    name: "Abdul",
    age : 27,
    [mySym] : "$$$",   // this behave as Object here-----if mySym error due to string 
    email: "abdul@google.com",
    location: "peshawar",
    isLoggedIn: false,
    lastLoginDays : ['sunday', 'monday']
}

console.log(jsUser.email);
// console.log(jsUser[email]);  // Error because above email having string value
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "abdul@gmail.com" // for changing in above 
// Object.freeze(jsUser)

jsUser.email = "abdul@yahoo.com"
console.log(jsUser);



jsUser.greeting = function (){
    console.log("Hello Js User");

}
jsUser.greetingTwo = function (){
    console.log(`Hello Js User, ${this.name}`);

}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

