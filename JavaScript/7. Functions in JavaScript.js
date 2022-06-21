console.log("This is Tutorial 53");

//Function in JavaScript
//functions are used for getting same logic again and again
// function greet(name, greetText = "Greetigs from JavaScript") -> that second parameter is passed for default value, if it doesn't get parameter from user
function greet(name, greetText = "Greetigs from JavaScript") {
    let name1 = "Name1"  // this only read by this function
    console.log(greetText + " " + name);
    console.log(name + " is a Good boy");
}

//Function that returns value
function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // console.log("Function is returned"); // this will not come in console beacuse function already returned 
}

let returnVal = sum(1, 2, 3); //This is Functions call 
console.log(returnVal);
// Console o/p : 6

let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
// console.log(name +  " is a Good boy"); 
// console.log(name1 +  " is a Good boy"); 
// console.log(name2 +  " is a Good boy"); 
// console.log(name3 +  " is a Good boy"); 
greet(name, greetText);  //This is Functions call 
greet(name1, greetText);
greet(name2, greetText);
greet(name3); 
