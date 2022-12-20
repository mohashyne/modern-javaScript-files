let email = 'muhammad@crystal.com'
let fullName = 'HauwaMuhammad'

let lastNumOfLetter = email.lastIndexOf('m');
console.log(lastNumOfLetter);
// Result 19

let sliceLetter = email.slice(3,8);
console.log(sliceLetter);
// Result ammad

let subLetter = email.substring(0,7); //start and Num of letters
console.log(subLetter);
// Result muhamma

let subFullName = fullName.substr(4,8); //start and Num of letters
console.log(subFullName);
// Result aMuhamma


let rplace = fullName.replace('Muhammad', 'MSA');
console.log(rplace);
// Result HauwaMSA
//Note ; when replace a single letter  that appears more than once , it will only replace the first letter.







