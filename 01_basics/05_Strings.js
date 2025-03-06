const name = "abdul"
const repoCount = 50

// console.log(name + repoCount +"Value");  // wired syntax

console.log(`hello my name is ${name} and my repo count ${repoCount}`);  //Modern way of syntax called string interpolation 


//Another way of string declearation

const gameName = new String("wahabkhan")

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); // for upper case alphabets
console.log(gameName.charAt(6));  // Position of finding character
console.log(gameName.indexOf('h'));  // index of character 



const newString = gameName.substring(0, 4) 
console.log(newString);

let anotherString = gameName.slice(-9, 6)
console.log(anotherString);


const newStringOne = "       Wahab      "

console.log(newStringOne);
console.log(newStringOne.trim()); // Trim function remove spaces from string

const url = "https://abdul.com/wahab%20khan"
console.log(url.replace('%20', '-')) // remove %20 as - in url 

console.log(url.includes('wahab')); // check whether the string 'wahab' is avalible in url or not

