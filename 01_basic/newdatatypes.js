// primitive data type 
// data types 7 => String , Number, undefine,
// Boolean,Symbol ,BigInt
const score = 100;
const scoreValue = 100.3;
const isLogged = false;
const outsieTemp = null;
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


//  refrence type => non primitive
// Array, objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    Name: "satyam",
    age: 22,

}

const myFunction = function(){
    console.log("hello satyam");
    
}
// console.log(typeof heros);
console.log(myObj);




