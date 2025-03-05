const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "1437"
accountCity = "Peshawar"  //For kind of information that we can add value without keyword 'let' and 'var'//
let accountState;      // this give us an undefined value in javascript //


/*
prefer not to use var 
because of issue in block scope and functinal scope
*/

// accountId = 1437 // not allowed to change it because of const keyword

accountEmail = "kjk@gmail.com"
accountPassword = "122121212"
accountCity = "lahore"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
