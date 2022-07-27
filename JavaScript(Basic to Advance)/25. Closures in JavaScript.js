// Closures in JavaScript 

// Closures ->>
// Functions return functions :-
// - When we are returning function which is inside another function then that inside 
// function will return with variables which are in local memory of outside function
// This is called as closure.
// - The inside function will return with its lexical environment.
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}
const ans = printFullName("sagar", "akhade");
ans();  //Output : sagar akhade
// Examples of Closure :-
function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a, b, x);
    }
}
const ans1 = hello("arg");
ans1();
// Output : varA varB arg
// Example : Create a closure function to return square and cube of given number
// - for getting power we can use Math.pow(number, power) Or 
// simply we can use ans = number ** power
function myFunction(power){
    return function (number){
        return (number ** power);
    }
}
const square = myFunction(2);
const ans2 = square(3); 
console.log(ans2); // Output : 9
const cube = myFunction(3);
const ans3 = cube(3);
console.log(ans3); // Output : 27
// Example : Create a function using closure method which will call only once
// and if called again and again it will give some another message
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log(`Hi, You called Me !!`);
            counter++;
        }
        else{
            console.log(`Mai already ek bar call ho chuka hoon.`)
        }
    }
}
const myFunc = func();
myFunc();  // Output : Hi, You called Me !!
myFunc();  //Output : Mai already ek bar call ho chuka hoon.
myFunc();  //Output : Mai already ek bar call ho chuka hoon.
const myFunc2 = func();
myFunc2();  // Output : Hi, You called Me !!
myFunc2();  //Output : Mai already ek bar call ho chuka hoon.
