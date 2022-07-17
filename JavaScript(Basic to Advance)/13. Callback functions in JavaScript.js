// Callback functions in JavaScript 

// Callback function :-
// When we pass a function as a parameter of another 
// function is called callback function
function myFunc2(name){
    console.log("inside myFunc 2");
    console.log(`your name is ${name}`)
}
function myFunc(callback){
    console.log("Hello there I am inside myFunc");
    callback("Sagar"); //->> calling function
}
myFunc(myFunc2); // ->> Callback function 
// Output : 
// Hello there I am inside myFunc 
// inside myFunc 2 
// your name is Sagar 

// Function returning function :-
// Here the function is returning another function
// Higher order Functions : functions which take function
// as parameter or returns function returns function are called HOF
function myFunc3(){
    function hello(){
        return "hello world";
    }
    return hello;
}
const ans = myFunc3();  
console.log(ans());
// Output : hello world
