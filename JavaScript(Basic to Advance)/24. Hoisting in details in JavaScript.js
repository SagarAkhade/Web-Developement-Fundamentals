// Hoisting in details in JavaScript 

// Hoisting ->>
// Before execution of code it first storing varibles and functions in global memory. 
// It is called as Hoisting
// With Hoisting we can call functions before declaring them. And it works only for normal function 
console.log(this);
// Output : window object is printed ->> this becomes window object
console.log(window);
// Output : window object is printed 
myFunction();   
// Output : this is my function
console.log(fullName);
// Output : undefined
function myFunction(){
    console.log("this is my function");
}
var firstName1 = "Sagar";  //in global scope
var lastName1 = "Akhade";  //in global scope
var fullName = firstName1 + " " + lastName1;
console.log(fullName);
// Output : Sagar Akhade

// function Expression :-
// - In case of function expression we store function in variable 
console.log(myFunction1);
// Output : undefined
var myFunction1 = function(){
    console.log("This is my another function");
}

// let and const :-
// - In case of let and const before code execution these variables are stored in global memory 
// as uninitialize, and calling them before declaring will give error
// let and const are also get hoisted but they are not initialize 
// with default value like var initialize with undefined
// console.log(firstName2);
// Output : Error - Uncaught ReferenceError: Cannot access 'firstName2' before initialization
let firstName2 = "Sagar";
console.log(firstName2);
// Output : Sagar 

// Temporal Dead Zone (TDZ) ->>
// - Temporal Dead Zone is area of block where variables are inaccessible until the moment
// the computer completely initializes it with a value.
// console.log(typeof firstName4);
// Output : error
let firstName4 = "Sagar";

// Function Execution context ->>
// - while we create a code and we use function then in global execution context
// it will create function execution context to read data inside the function  
// - arguments : it is array like object which stores the arguments paased inside function
let foo = "foo";
console.log(foo);   // Output : foo
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}
const personName = getFullName("sagar", "akhade");
console.log(personName);
// Output : 
// Arguments(2) ['sagar', 'akhade', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// var inside function
// sagar akhade

// Lexical Environment, Scope chain ->>
// - when we trying to access any variable inside the function but it is
// not present there then JS will search that variable outside that function
// i.e in global scope this is called as Lexical Environment Or Scope Chain for that function. 
const lastName4 = "akhade";
const printName = function() {
    const firstName4 = "sagar";
    function myFunction(){
        console.log(firstName4);
        console.log(lastName4);
    }
    myFunction();
}
printName();
// Output : sagar akhade  //each on next line
