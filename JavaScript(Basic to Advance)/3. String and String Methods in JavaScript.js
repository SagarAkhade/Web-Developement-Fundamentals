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

// Last Index of String ->> stringName - 1
console.log(firstName[firstName.length - 1]);
// Output : r

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
