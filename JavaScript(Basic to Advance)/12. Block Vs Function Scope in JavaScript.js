// Block Vs Function Scope in JavaScript 

// let and const are block scope
// var is function scope
// let and const are access only inside the particular block and not outside that block
// var is accessible throught the js file
{  // This is block
    let firstName = "Sagar";
    const a = "Sunny";
    // These variable(let and const) are only accessible in this block only
}

{
    var a = "Sagar";
}
// var is function scope and it is accessible throught the complete file
console.log(a);  // Output : Sagar

// Default parameters :-
// if function has two parameters but while calling we only pass one argument
// it will gives us NaN but to avoid this we set default value to parameters like (b=0) as done below.
function addTwo(a, b = 0) {
    return a + b;
}
const ans = addTwo(4);
console.log(ans);   // Output : 4

// Rest parameter :-
// When we are passing more arguments than number parameters
// then these extra argument can be store using rest parameter
// it will gives complete array of remaining argumenets
function myFunc(a, b, ...c) {
    console.log(`a is ${a}`); 
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}
myFunc(3, 4, 5, 6, 7, 8);
// Output : 
// a is 3
// b is 4
// c is (4) [5, 6, 7, 8]

// Ex: Add all numbers 
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const result = addAll(1, 2, 3, 4, 5);
console.log(result);    // Output : 15

// Parameter destrucutring :-
// used with objects and mostly in react
// In parameter destructuring we pass values of object as paramter of function
// using destructuring 
const person = {
    firstName : "Sagar",
    gender : "male",
    id : 1,
}
function printDetails({firstName, gender, id}) {
    console.log(firstName);
    console.log(gender);
    console.log(id);
}
printDetails(person);
// Output : Sagar male 1  ->> Each on next line
