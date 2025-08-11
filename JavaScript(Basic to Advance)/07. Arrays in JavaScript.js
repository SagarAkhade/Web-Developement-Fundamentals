// Arrays in JavaScript 

// Arrays :-
// Arrays are ordered collection of elements or items
// Arrays are mutable
// Arrays are reference type ->> Object
// Single array can store all data types simulataneously 
// declarations and initialization of Array
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// Output : ['apple', 'mango', 'grapes']
console.log(fruits[0]);
// Output : apple
let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 2.3, "string", null, undefined]
console.log(mixed);
// Output : [1, 2, 2.3, 'string', null, undefined]

// changing value of array element
fruits[1] = "banana";
console.log(fruits);
// Output : ['apple', 'banana', 'grapes']
console.log(typeof fruits);
// Output : object

// Check if given is array or not 
console.log(Array.isArray(fruits));
// Output : true

let obj = {};  //object literal
console.log(typeof obj); 
// Output : object

// Array Methods :-
// .push(elementName) method ->> 
// Add element to the last of array elements
let fruits1 = ["apple", "mango", "grapes"];
fruits1.push("banana");
console.log(fruits1);
// Output : ['apple', 'mango', 'grapes', 'banana']

// .pop() method ->>
// Removes element from the last of the Array
let poppedFruite = fruits1.pop();  // ->> it also gives the removed element
console.log(fruits1);
// Output : ['apple', 'mango', 'grapes']
console.log("Popped fruit is :" , poppedFruite)
// Output : Popped fruit is : banana

// unshift(elementName) ->>
// Add element in starting of Array
fruits1.unshift("banana");
console.log(fruits1);
// Output : ['banana', 'apple', 'mango', 'grapes']

// shift() method ->>
// Removes the element from starting of Array
// It also gives us Removed element
let removedFruit = fruits1.shift();
console.log(fruits1);
// Output : ['apple', 'mango', 'grapes']
console.log("First removed fruit is :", removedFruit); 
// Output : First removed fruit is : banana

// Primitive vs reference data type :-
// primitive type ->>
// - Primitive data types are the immutable in JavaScript
// - When we assign a primitive value to a variable, it directly holds the value
// - Primitive types: string, number, bigint, boolean, undefined, null, symbol.
let num1 = 6;
let num2 = num1;
console.log("value of num1 is", num1);  
// Output : value of num1 is 6
console.log("value of num2 is", num2); 
// Output : value of num2 is 6

// reference type ->>
// - Arrays are refernce type
// - here we passing refernce of element so it will reflect changes in all 
// - Reference data types are the mutable in JavaScript
// - Reference types: object, array, function.
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
// Output : array1 ['item1', 'item2']
console.log("array2", array2);
// Output : array2 ['item1', 'item2']
array1.push("item3");
console.log("After pushing element in array1");
console.log("array1", array1);
// Output : array1 ['item1', 'item2', 'item3']
console.log("array2", array2);
// Output : array2 ['item1', 'item2', 'item3']

// Clone Array :-
// making copy of any given array
let arr1 = ["item1", "item2"];
let arr2 = arr1.slice(0).concat(["item3", "item4"]);  // (Method 1)cloning arr1 to arr2. also we are adding some more elements in it
console.log(arr2);
// Output : ['item1', 'item2', 'item3', 'item4']
let arr3 = [].concat(arr1)  //(Method 2) arr1 to arr3

// Spread operator :-
// New way of cloning array
let arr4 = [...arr1];
console.log(arr4);
// Output : ['item1', 'item2']
let arr5 = [...arr1, "item3", "item4"];  // cloning and adding some more elements with spread operator
// Also creating array using two spread operator
let newArray = [...arr1, ...arr3]; 

// loops in Array :-
// for loop in Array ->>
// array.length -> gives length of array
let fruits2 = ['apple', 'mango', 'grapes', 'banana'];
let fruits3 = [];
for(let i = 0; i < fruits2.length; i++){
    fruits3.push(fruits2[i].toUpperCase());
}
console.log(fruits3);
// Output : ['APPLE', 'MANGO', 'GRAPES', 'BANANA']

// while loop in Array :-
const fruits5 = ["apple", "mango", "grapes"];
let i = 0;
while(i < fruits5.length){
    console.log(fruits5[i]);
    i++;
}
// Output : apple mango grapes ->> each printed on next line

// for of loop in Array :-
// it is mostly used for arrays
const fruits6 = ["apple", "mango", "grapes"];
for(let element of fruits6){
    console.log(element);
}
// Output : apple mango grapes ->> each printed on next line

// for in loop in Array :-
// for in loop will give all indeces of Array elements
// it used less times 
const fruits7 = ["apple", "mango", "grapes"];
for(let index in fruits7){
    console.log(fruits7[index]);
}
// Output : apple mango grapes ->> each printed on next line

// Use of const for creating array :-
// many devloper uses const for creating array because it will not change array elements by mistake 
const fruits4 = ["apple", "mango"];
// fruits4 = ["grapes", "pineapple"]; ->> here gives error cause it declared with const and cannot be changed 
fruits4.push("banana");
console.log(fruits4);
// Output : ['apple', 'mango', 'banana']

// Array Destructuring (ES6 feature):-
// For storing the values of Array element using separate variables destructuring used 
// And then these variables can be used normally
// ...myNewArray ->> will store all remaining array elements
const myArray = ["value1", "value2","value3", "value4"];
let [myvar1, myvar2, ...myNewArray] = myArray;  // ->> stores acc to idexes of myArray
console.log(myvar1);  // Output : value1
console.log(myvar2);  // Output : value2
console.log(myNewArray); // Output : ["value3", "value4"]
// If want to skip any index just , , left with like this
let [item1, , item2] = myArray;
console.log(item1);  // Output : value1
console.log(item2);  // Output : value3
