// questions must ask in interveiws

//  Primitive types

//  7 types : 
// String----------"custome message"
//  Number------1234 
// Boolearn------true & false
//  null-------empty or nothing 
// undefined----- what value declearation
// Symbol ------to make value unique espacially in avdvance js 
// BigInt-----scientific values

const score = 100         //number
const scoreValue = 100.3  //number

const isLoggedIn = false   //Boolean type
const outsideTemp = null   //empty temperature for e-g '0'
let userEmail;             //undefined value in terminal

const id = Symbol('123')   //(unique ID)usage in  front-end libraries
const anotherId = Symbol('123') 

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference or (Non primitive) types
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
