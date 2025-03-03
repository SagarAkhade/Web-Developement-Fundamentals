// Variables in JavaScript
// Variable ->> use to store some information 
// declaration of variables 
//TypeOfVariable VariableName = value;
// Rules for declaring variables ->> 
// 1. Cannot start with number, Ex - 1value (invalid) , value1 (valid)
// 2. Can only use underscore _ or Dollar $ in variables names(No other symbol allowed), Ex: _name  (valid), na_me$ (valid)
// 3. Cannot use spaces in variables Ex: var first name (invalid) var first_name (valid called as snake case writing)
// 4. Convention ->> start with small letter and use camelCase Ex: firstName

// Types of Data types in JavaScript ->> var , let , const 

// var keyword
var firstName = "Sagar";
console.log(firstName);
// Output : Sagar

//change value
firstName = "Mohit";
console.log(firstName);
// Output : Mohit

"use strict"; // ->> use for developer to avoid mistakes

// let keyword ->> 
// Mostly let keyword is used for declaring varibles(launched in ES6(2015))
// Difference between var and let
// var can be initialize multiple times with same variable name 
//But in case of let, we cannot initialize with same variable name muliple times. It will gives error
// Main difference is block scope vs function scope
// var is function scope and let is block scope
let name1 = "Sagar";
console.log(name1);
// Output : Sagar

// Declaring Constant
// Constants ->> these values never change Ex : pi
// Constant value never changes it remains same in all program
const pi = 3.14;
console.log(pi);
// Output : 3.14
