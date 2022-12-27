let radius = 10;
const pi = 3.14;

//console.log(radius, pi);
// Result 10 3.14

// math operators +, -, %, **(pow) , / , %

//console.log(10/2);
// result  5



//let result = radius % 3;
// result  1

//let result = pi * radius**2 //(formula area of a circle)
// result 314 


// let result  = radius**3
// result 1000


// Order of operation - B I D M A S
let result = 5 * (10 - 3)**2;
// Result 245

let likes = 10;
//likes = likes + 1; OR  likes += 1; see shorthand below:
//likes++;
//result 11



//likes--;
// result 9

//likes += 10;
//result 20

// likes -= 5;
// result 5

//likes *= 5;
// result 50

//likes /= 2;
// result 5

likes %= 5;
// result 0

console.log(likes);
console.log(result);


// NaN  - Not a Number

console.log(5 / 'Hello');
// Result NaN


// Concatenate Numbers

let numCon = 'The blog has ' + likes + ' likes'
console.log(numCon);
// Result:  The blog has 0 likes
