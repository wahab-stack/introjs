/*
const score = 400   //Score is assigned the value 400 as a primitive number
console.log(score); // output 

const balance = new Number(100)  // here balance is created as an object using the number constructor. this is not a primitive number but an instance of the number object
console.log(balance);  //console.log(balance) will output [Number: 100] to the console, indicating that it is a Number object with the value 100.


console.log(balance.toString().length); //converts the number object to a string ("100") and .length gives of the string which is 3 (since 100 has three characters )

console.log(balance.toFixed()); // balance.toFixed() converts the Number object to a string, representing the number in fixed-point notation. By default, it rounds to 0 decimal places. Since balance is 100, the output will be "100". .toFixed(1) formats the number to 1 decimal place as a string. output will be "100.0"

const otherNumber = 3224.23532

console.log(otherNumber);
console.log(otherNumber.toPrecision(3)); // method formats a number to a specified precision (total number of significant digits)


const hundreds = 100000000000
console.log(hundreds.toLocaleString()); //method converts a number into a string, using locale-specific conventions (such as formatting for currency, decimals, and grouping separators).
console.log(hundreds.toLocaleString('en-PK')); //for paskistani cuurency format

*/


//+++++++++++++++++++++ Maths +++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); 
// console.log(Math.floor(4.9));
// console.log(Math.min(3, 5, 7, 1, 2));
// console.log(Math.max(3, 5, 7, 1, 2));
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10) + 1);


/*
Key Notes:
Math.abs(): Returns the absolute value of a number.
Math.round(): Rounds to the nearest integer.
Math.ceil(): Rounds up to the nearest integer.
Math.floor(): Rounds down to the nearest integer.
Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
You can scale and shift the range by multiplying and adding.
Use Math.floor() to convert the result to an integer.
This is useful for generating random numbers for games, simulations, or random selections.
*/




const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




