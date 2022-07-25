// How JavaScript works

// Working of JavaScript ->>
// JavaScript itself is Synchronous language
// i.e. while execution the first line completly gets executed and then goes to nextLine 
// Synchronos :- line-by-line top to bottom execution of code 
// JavaScript is Single-threaded language 
// i.e it executes the code line-by-line top to bottom
// JavaScript first compile the whole code and then execute it
// 1) Compilation phase :- 
// Early error checking 
// Determine apropriate scope for variables 
// 1.1 Tokenizing/Lexing - code is break into small-small tokens
// 1.2 Parsing - will create AST(Abstrac Syntax Tree) from these small tokens
// 1.3 Code Generation - execution phase
// 2) Code Execution Phase :-
// In JS code executes inside global execution context
// Example 1 :
console.log(this);
// Output : window object is printed ->> this becomes window object
console.log(window);
// Output : window object is printed 
console.log(firstName);   
// Output : undefined
var firstName = "Sagar";  //in global scope
console.log(firstName);
// Output : Sagar
// Example 2 :
console.log(this);
// Output : window object is printed ->> this becomes window object
console.log(window);
// Output : window object is printed 
console.log(myFunction);   
// Output : complete function is written on console
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
