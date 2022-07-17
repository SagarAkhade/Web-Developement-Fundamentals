// Data types and typeof operator in JavaScript 
// typeof operator in JavaScript 
// typeof operator tells us about the type of data type
// Data types (primitive data types) :-
// String
// number - 2, 4, 5.6
// boolean
// undefined 
// null
// BigInt
// Symbol

let age = 22;
let firstName = "Sagar";
console.log(typeof age);
// Output : number 
console.log(typeof firstName);
// Output : string 

// convert number to string 
// 22 -> "22"  -> just add empty string to number, Ex : 22 + "";
age = age + "";
console.log(typeof age);
// Output : string ->> "22"

// convert string to number 
// simply add + sign before string to covert it into number 
let myStr = "34";
console.log(typeof +myStr);
// Output : number

// Another way of conversion 
// Covert number to String
let a = 18;
a = String(a);
console.log(typeof a);
// Output : String
// Convet String to number 
let b = "34";
b = Number(b);
console.log(typeof b);
// Output : number

// undefined :-
// the variable which are not asign with value will give undefined 
// in case of const we must define its value
let firstName2;
console.log(typeof firstName2);
// Output : undefined
firstName2 = "Sagar";
console.log(typeof firstName2, firstName2);
// Output : string Sagar

// null :-
// null is nothing means it has nothing store 
let myVariable = null;
console.log(typeof myVariable);
// Output : object ->> this is bug/error

// BigInt :-
// used to store the big integers 
// BigInt can do all operations with BigInt only
console.log(Number.MAX_SAFE_INTEGER); // ->> max integer
// Output : 9007199254740991
let myNumber = BigInt(123546568784421667797);
console.log(myNumber);
// Output : 123546568784421666816n
// Another way to use BigInt -> write n after number Ex : 12n
let sameMyNumber = 12n;
console.log(sameMyNumber);
// Output : 12n

// Booleans :-
// Booleans are ->> true / false
let num1 = 5;
let num2 = 7;
console.log(num1 > num2);
// Output : false

// Comparison operators :-
// Comparison operators : > , < , >= , <= , == , ===, != , !==

// == vs === :-
console.log("7" == 7); // == ->> only checks values
// Output : true 
console.log("7" === 7); // === ->> checks values as well as data type
// Output : false 

// != vs !== :-
console.log("7" != 7); // == ->> only checks values
// Output : false 
console.log("7" !== 7); // === ->> checks values as well as data type
// Output : true 
