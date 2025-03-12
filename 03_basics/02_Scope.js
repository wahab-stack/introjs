// Scopes


//+++++++++++ Global Scope +++++++++++=

// let a = 10 
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);



//++++++++++++ Block Scope +++++++++++

var c = 300 
let a = 300
if (true){                                    // block Scope 
    let a = 10        
    const b = 20
    // console.log("INNER:", a );
    
}

// console.log(a);
// console.log(b);
// console.log(c);




//+++++++++ Nested Scope ++++++


function one() {
    const username = "Abdul"

    function two(){
        const website = "Github"
        // console.log(username);
    }
    // console.log(website); 

    two()
}
// one()

if (true){
    username = "abdul"
    if (username === "abdul"){
        const website = "GitHub"
        // console.log(username +   website)

    }
    // console.log(website)
}

// console.log(username);


//+++++++++++ Interesting Example ++++++++


function addone(num) {
    return num + 1 
}
console.log(addone(4))



const addTwo = function (num){
    return num + 2
}

console.log(addTwo(4))
