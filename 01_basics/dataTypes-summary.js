// questions must ask in interveiws

//  Primitive types

//  7 types : 
// String----------"custome message"
// Number------1234 
// Boolearn------true & false
// null-------empty or nothing 
// undefined----- what value declearation
// Symbol ------to make value unique espacially in avdvance js 
// BigInt-----scientific values

const score = 100         //number
const scoreValue = 100.3  //number
let myself = "Abdul wahab" // string
console.log(myself);


const isLoggedIn = false   //Boolean type
const outsideTemp = null   //empty temperature for e-g '0'
let userEmail;             //undefined value in terminal

const id = Symbol('123')   //(unique ID)usage in  front-end libraries
const anotherId = Symbol('123') 

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference or (Non primitive) types
// Array, Objects, Functions

const heros = ["Spiderman", "X-Men", "Batman"];
let myObj = {
    name: "Abdul",
    age: 22,
}
// console.log(heros);



const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);




//+++++++++++++++++++++++++++++++++++++++++++++++++


//Stack(primitive)  Heap(Non-primitive)
// whenever stack memory is using, variable you have decleared, you get a copy of it and whatever a memory is defined inside heap, any object or anything goes inside heap, from there you get the reference of the original value //

let myYoutubename = "ABDEE"
let anothername = myYoutubename
anothername = "Abdul"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "wahab@google.com",
    Password: "abde1437"
}
let userTwo = userOne
userTwo.email = "Dul@google.com"

console.log(userOne.email);
console.log(userTwo.email);
