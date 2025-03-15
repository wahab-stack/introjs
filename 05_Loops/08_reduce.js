// reduce()


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)   // here accumulator start with 3 

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 3)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "javaScript",
        price : 5000
    },
    {
        itemName : "py Course",
        price : 10000
    },
    {
        itemName : "Mobile development",
        price : 15000
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);

