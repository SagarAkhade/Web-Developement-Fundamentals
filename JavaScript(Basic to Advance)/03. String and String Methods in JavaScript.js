// String and String Methods in JavaScript

// Strings are immutable 
// Once Strings are declared cannot change further

let firstName = "Sagar";
// String index starts with 0 
// S a g a r 
// 0 1 2 3 4 

console.log(firstName[2]);
// Output : g

//Length of string ->> stringName.length 
console.log(firstName.length);
// Output : 5

// Last Index of String ->> stringName.length - 1
console.log(firstName[firstName.length - 1]);
// Output : r

// String concatenation :-
// to combine two or more strings into one string
let string1 = "sagar";
let string2 = "akhade";
let fullName = string1 + " " + string2;
console.log(fullName);
// Output : sagar akhade

let string3 = "17";
let string4 = "10";
let newString = string3 + string4;
console.log(newString);
// Output : 1710
let newString1 = +string3 + +string4; // ->> + sign converts string to number
console.log(newString1);
// Output : 27

// Template string :-
// Ex : `my name ${variable_name}`
let age1 = 22;
let firstName1 = "sagar";
// let aboutMe = "my name is " + firstName1 + " and my age is " + age1;
let aboutMe = `my name is ${firstName1} and my age is ${age1}`;
console.log(aboutMe);
// Output : my name is sagar and my age is 22

// String Methods ->>
// Some methods ->> trim(), toUpperCase(), toLowerCase(), slice()

// trim() method ->> remove all extra spaces before and after only and not in between
let a = "  Sagar  ";
console.log(a.length);
// Output : 9
let newString = a.trim();
console.log(newString);
// Output : sagar ->> all extra spaces gets removed 
console.log(newString.length); 
// Output : 5 

// toUpperCase() method ->> converts all letters to UpperCase
console.log(newString.toUpperCase());
// Output : SAGAR  

// toLowerCase() method ->> converts all letters to LowerCase
console.log(newString.toLowerCase());
// Output : sagar

// slice() method ->> will give the subString from given String
// slice(startIndex, EndIndex) ->> it gives subString from startIndex to endIndex - 1
let myString = "rainbow";
let newSliceString = myString.slice(0, 4);
console.log(newSliceString);
// Output : rain
let newSliceString1 = myString.slice(1); // ->> when we pass single argument it will start from index 1 and goes till end 
console.log(newSliceString1);
// Output : ainbow
