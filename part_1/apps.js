//  strings
console.log('Hello, world');
//result Hello world

let email = 'msa@gmail.com'
console.log(email);
//result msa@gmail.com

//  strings concatenation
let firstName = "Muhammad";
let lastName = "Salihu";

let fullName = firstName + ' ' + lastName;
console.log(fullName);
//result Muhammad Salihu



//  getting characters
console.log(fullName[0])
//result M 



//  strings length
console.log(fullName.length);
//result 15


//  strings   method
//  some method utter the original value and some don't
console.log(fullName.toUpperCase());
//result MUHAMMAD SALIHU

let result = fullName.toLowerCase();
console.log(result, fullName);
//result muhammad salihu Muhammad Salihu

let index = email.indexOf('@'); //'@' = argument
console.log(index);
//result 3

let showString = email.charAt('3')
console.log(showString);
//result @