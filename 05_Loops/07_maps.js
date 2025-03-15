const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = Numbers.map( (num) => num + 10 )
// console.log(newNums);

// const newNums = Numbers.map( (num) => { return num + 10} )
// console.log(newNums);


// Chaning   (two thre methods can use directly)

const newNums = Numbers
                .map( (num) => num + 10 )
                .map( (num) => num * 2 )
                .filter( (num) => num >= 28 )
console.log(newNums);
