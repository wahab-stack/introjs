
//+++++++++ this +++++++++++


const user = {
    username: "abdul",
    price: 999,
    
    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`)   // this keyword refer the current context in this USER object
        // console.log(this);
        
    }
}

// user.welcomeMessage()    // output : values of te current context 

// user.username = "sami"   // output : sami welocme to website  (Context changed)
// user.welcomeMessage()

// console.log(this);

/*
abdul , welcome to website
{
  username: 'abdul',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sami , welcome to website
{
  username: 'sami',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


//++++++++++++ Arrow function ++++++++++++

// function chai(){
    
//     console.log(this);
    
// }
// chai()


// function chai(){
//     let username = "wahab"
//     console.log(this.username);
    
// }
// chai()   // Output : Undefined 



// const chai = function (){
//     let username = "wahab"
//     console.log(this.username);
// }

// chai()   // this also undefined in terminal 


//+++++++++++++++ Arrow Fun()  +++++++++

// const chai = () => {
//     let username = "wahab"
//     console.log(this.username);
// }

// chai()  // undefined


// const chai = () => {
//     let username = "wahab"
//     console.log(this);
// }

// chai()  // output : {}




// core arrow function 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// console.log(addTwo(30 , 5))   // terminal : 35


//Implicit return
// const addTwo = (num1, num2) => num1 + num2     // no return keyword 
// console.log(addTwo(30 , 5))  // terminal : 35 


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(30 , 5)) // terminal : 35



//Explicit return

const addTwo = (num1, num2) => ({username: "abdul"})
console.log(addTwo(30 , 5))  //Terminal : {username : `abdul`}



