

function myName(){
    console.log("A");
    console.log("B");
    console.log("D");
    console.log("U");
    console.log("L");
}
// myName()   // here myName is reference of function and () this is execution of function

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }
// addTwoNumbers(3 , 5) // output is 8 
// addTwoNumbers(3 , "5")  // output 35 
// addTwoNumbers(3 , "a")  // output is 3a
// addTwoNumbers(3 , null)  // output is 3  

/*
addTwoNumbers is function name 
number1 and number2 is function parameter or arguments
*/

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result    // nothing will print after return 
    console.log("Wahab");
    // return number1 + number2   // 2nd way of printing result 
    
 }
const result = addTwoNumbers(3 , 5)

// console.log("Result:", result);


//++++++++ Method 1 +++++++++

// function loginUserMessage (username){
//     return `${username} Just looged in`

// }
// console.log(loginUserMessage("Abdul")); // output : Abdul just logged in 


//++++++++++ Method 2 ++++++++++++++

// function loginUserMessage (username){

//     return `${username} Just looged in`

// }
// console.log(loginUserMessage());  // output : undefined just logged in 


//++++++++++ Method 3 (through if) ++++++++++++++

// function loginUserMessage (username){
//     if (username === undefined) {                      
//         console.log("Please Enter a username");
//         return  // below return will not execute cause of this return 
                
//     }

//     return `${username} Just looged in`

// }
// console.log(loginUserMessage());     // output : Please enter a username 


//++++++++++ Method 3 (part 2) ++++++++++++++

// function loginUserMessage (username){
//     if (!username) {                      
//         console.log("Please Enter a username");
//         return  // below return will not execute cause of this return 
                
//     }

//     return `${username} Just looged in`

// }
// console.log(loginUserMessage());

//++++++++++ Method 4 (default values) ++++++++++++++

// function loginUserMessage (username = "Ali"){
//     if (!username) {                      
//         console.log("Please Enter a username");
//         return  // below return will not execute cause of this return 
                
//     }

//     return `${username} Just looged in`

// }
// console.log(loginUserMessage());  // output : Ali just logged in


//++++++++++ Method 4 (default values) ++++++++++++++

function loginUserMessage (username = "Ali"){
    if (!username) {                      
        console.log("Please Enter a username");
        return  // below return will not execute cause of this return 
                
    }

    return `${username} Just looged in`

}
console.log(loginUserMessage("Wahab"));  //output : Wahab just logged in (overide ali by wahab) 