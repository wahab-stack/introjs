//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

//terminal 
/*

1
2
3
4
5

*/


const greet = "Hey world"
for (const greetings of greet) {
    // console.log(`Each char is ${greetings}`);
    
}

//Terminal 
/*

Each char is H
Each char is e
Each char is y
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d

*/


// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United state of America")
// map.set('FR', "France")
// map.set('PK', "Pakistan")

// console.log(map);

/*   Terminal 

Map(4) {
  'IN' => 'India',
  'USA' => 'United state of America',
  'FR' => 'France',
  'PK' => 'Pakistan'
}

*/


//for of loop on map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")
map.set('PK', "Pakistan")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}
/*    terminal

IN :- India
USA :- United state of America
FR :- France
PK :- Pakistan

*/


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// Object is not iteratable 
