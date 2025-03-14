const coding = ["js", "cpp", "rb", "java", "php"]

// coding.forEach(function (val) {
//     console.log(val);
    
// })


// coding.forEach( (item) => {
//     console.log(item);
    
// } );


// function PrintMe(item){
//     console.log(item);
    
// }

// coding.forEach(PrintMe)


// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
    
// } )

/*

js 0 [ 'js', 'cpp', 'rb', 'java', 'php' ]
cpp 1 [ 'js', 'cpp', 'rb', 'java', 'php' ]
rb 2 [ 'js', 'cpp', 'rb', 'java', 'php' ]
java 3 [ 'js', 'cpp', 'rb', 'java', 'php' ]
php 4 [ 'js', 'cpp', 'rb', 'java', 'php' ]

*/


const myCoding = [
    {
        languageName: "javaScipt",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
    
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    
})

/*

javaScipt
java
Python

*/




