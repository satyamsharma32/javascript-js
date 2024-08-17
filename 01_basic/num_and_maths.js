const score = 50;
const balance = new Number(100);
console.log(balance);

console.log(score);
// console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));


const otherNumber = 1230.8654
console.log((otherNumber.toPrecision(5)));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // for 0 seperaion method use 'en-IN'


// ``````````````````````maths````````````````````````````````````

// console.log(Math);
// console.log(Math.abs(-4)); // to choose the positive
// console.log(Math.round(4.8)); // to convert into round of 
// console.log(Math.ceil(4.2)); // min will taken by is 4 
// console.log(Math.floor(4.9));  // max will taken by is 4 


console.log(Math.random()); // it always give random number between 0 to 1
const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1) + min);








