// const myObject = {
//     js: "Javascript",
//     cpp: "C++",
//     rb: "rubby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

/* terminal 

Javascript
C++
rubby
swift by apple

*/

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} Shortcut is for ${myObject[key]}`);
    
}

/* Terminal 

js Shortcut is for Javascript
cpp Shortcut is for C++
rb Shortcut is for rubby
swift Shortcut is for swift by apple

*/


const programming = ["js", "cpp", "rb", "java", "php"]
for (const key in programming) {
    
    console.log(programming[key]);
    

}


/* terminal 

js
cpp
rb
java
php

*/