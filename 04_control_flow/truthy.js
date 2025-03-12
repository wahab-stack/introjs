

// if (0)          console.log("Falsy"); // Won't run
// if ("")         console.log("Falsy"); // Won't run
// if (null)       console.log("Falsy"); // Won't run
// if (undefined)  console.log("Falsy"); // Won't run
// if (NaN)        console.log("Falsy"); // Won't run

// if ("hello")    console.log("Truthy"); // Runs
// if (42)         console.log("Truthy"); // Runs
// if ([])         console.log("Truthy"); // Runs
// if ({})         console.log("Truthy"); // Runs


const useremail = []

if (useremail) {
    console.log("Got user email");
    
} else {
    console.log("Dont have user email");
    
}



//falsy values 

// false, 0 , -0, BigInt 0n, "", null , undefined, NaN

//truthy values

// "0" , 'false', " " , [] , {} , function(){} --- empty function

//false == 0 (true)
//false == "" (true)
// 0 == " " (true)


// if (useremail.length === 0) {
//     console.log("Array is empty");
    
// }


// const emptyobj = {}
// }

// if (Object.keys(emptyobj).length === 0) {
//     console.log("Object is empty");
    
// }     // Terminal : Objectis empty


const emptyobj = {
    name: "Abdul",
    age : 34
}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
    
} else{
    console.log("The object is not empty");
    
}   // terminal : The object is not empty




// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);



// Terniary Operator   
//syntax...
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? iceTeaPrice <= 80 : console.log("more than 80")


//Condition : iceTeaPrice <= 80  
//True : iceTeaPrice <= 80
//false : console.log("more than 80")
