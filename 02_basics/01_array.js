const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);



//++++++++ Array Methods ++++++++++++++++

// myArr.push(6)
// myArr.push(7)
// myArr.pop()



// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);
// // console.log(typeof newArr);

// console.log(myArr.length);


//Slice , splice

const fruits = [ 'Apple', 'banana', 'mango', 'cherry', 'lemon']
const fruitsslice = fruits.slice(1, 3) // Extracts from index 1 to 2 (endIndex is exclusive)


//slice Purpose: Extracts a portion of an array and returns it as a new array. -------without modifying the orignal array
console.log('orignal Array', fruits);
console.log('Slice array', fruitsslice);

console.log('Original array after slice:', fruits);  // remain unchanged

const removedFruits = fruits.splice(1, 3) // this will remove 'banana' , 'mango' , 'cherry'
console.log('Removed Elements', removedFruits); // output: banana mango cheery

console.log('Orignal aray after splice',fruits); // orignal array will be "apple" and "lemon"




