const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros)  // concat use to add another array
// console.log(allHeros);


// const all_new_heros = [...marvel_heros,...dc_heros] // spreading array 
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const Real_another_array = another_array.flat(Infinity)     // 

// console.log(Real_another_array);


// console.log(Array.isArray("abdul"));
// console.log(Array.from("abdul"));
// console.log(Array.from({name: "abdul"})); // output will sqaure brackets [] 


let num1 = 100
let num2 = 300
let num3 = 500

console.log(Array.of(num1, num2, num3));


