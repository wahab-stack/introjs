// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai() {   // Named IIFE
    console.log(`DB CONNECTED`);
    
})() ;

/*
()()
 problem due to the global scope pollution to avoid these pollution we use IIFE 
*/

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}  )('WAHAB')