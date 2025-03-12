// ++++++++++ IF ++++++++++


// if (true) {      // executed
    
// }
// if (false) {     // not executed
    
// }

//<, >, <=, >=, ==, !=, === (for type checking), !==

// const isLggedIn = true 
// const teampreture = 69

// if (teampreture < 50) {
//     console.log("less than 50");  
// } else{
//     console.log("Greater then 50")
// }

// console.log(teampreture);



//Scope related

// const score = 300
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// } else {
    
// }

// console.log(`User power: ${power}`);




const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");



// if (balance < 500) {
//         console.log("less than 500");
//     } else if (balance < 750) {
//         console.log("less than 750");
        
//     } else if (balance < 900) {
//         console.log("less than 750");
        
//     } else {
//         console.log("less than 1200");
    
//     }



const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow user for shoping");
    
} 
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
        
}


