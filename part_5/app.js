//  Arrays : use to store collection of data, objects

let crystals = ['muhammad', 'aminu', 'salihu'];
/*
crystals[1] = 'hassan'; // to replace index 1
console.log(crystals[1]);
// result ['muhammad', 'hassan', 'salihu'] 
*/

// let ages = [ 20, 25, 30, 35];
// console.log(ages[2]);


//console.log(crystals.length);
// result 3


// Array Methods

let joinArray = crystals.join(',') //join and separate with a comma, which will cconvert them to a string.
console.log(joinArray);
//Result muhammad, aminu, salihu


let checkIndex = crystals.indexOf('salihu');
console.log(checkIndex);
// Result 2


//let concatCrystal = crystals.concat(['musa', 'ahmad']);
//console.log(concatCrystal);
// Result ['muhammad', 'aminu', 'salihu', 'musa', 'ahmad']

let newCrystal = crystals.push('mustapha');
//result 4 (becoz we added 'mustapha to make the length become 4) it ulters the original value, so we call it a destructive method.
//newCrystal = crystals.pop() // take out the end value
console.log(newCrystal);
console.log(crystals)