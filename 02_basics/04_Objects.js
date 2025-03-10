//++++++ Objects declearation ++++++++

// const tinderuser = new Object() // terminal {} due to empty objects
const tinderuser = {}              // same 

tinderuser.id = "1437"
tinderuser.name = "abdul"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "abd@google.com",
    fullname : {
        userfullname:{
            firstname:"AB",
            lastname : "Wahab"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id: "12",
        email: "abde@google.com"
    },
    {
        id: "13",
        email: "ab@google.com"
    },
    {
        id: "14",
        email: "abd@google.com"
    }
]

// users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));  // these show tinderuser values , keys , entries in it
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn')); // for checking the property of avlue in terminal 


