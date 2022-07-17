// Conditionals statements in JavaScript 

// if-else conditions 
let age = 17;
if(age >= 18){
    console.log("User can play Games");
}
else{
    console.log("User can play Mario");
}
// Output : User can play Mario

// Check number is even or odd
let num = 18;
if(num%2 == 0){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is odd`);
}
// Output : 18 is even

// falsy values : 
// false, "", null, undefined, 0 ->> these are false value
// truthy values :-
// "abc", 1, -1 
let firstName = "";   // emtpy string is falsy value
if(firstName){
    console.log(firstName);
}
else{
    console.log("firstName kinda empty");
}
// Output : firstName kinda empty

// Ternary operator(conditional operator) :-
// (condition) ? (true) : (false) 
let age1 = 8;
let drink = (age1 >= 5) ? "coffee" : "milk";
console.log(drink);
// Output : coffee

// Operators :-
// and or operator :-
// and(&&) operator ->> if anyof condition becomes false all becomes false
let firstName3 = "Sagar";
let age2 = 22;
if(firstName3[0] === "S" && age2 > 18){
    console.log("Name starts with S and above 18");
}
else{
    console.log("inside else");
}
// output : Name starts with S and above 18

// Or(||) operator ->> if anyof condition becomes true all become true
// if both condition becomes false all becomes false
if(firstName3[0] === "S" || age2 > 25){
    console.log("Name starts with S and above 18");
}
else{
    console.log("inside else");
}
// output : Name starts with S and above 18

// nested if-else :-
// if-else(if-else) ->> if-else under other if-else statement
// Creating a simple game ->>
// winning number 19 
let winningNumber = 19;
// taking input from user using prompt()
// prompt("entered_string") ->> will give us String 
// so we added + to convert string in number 
let userGuess = +prompt("Guess a number");
console.log(userGuess);
if(userGuess === winningNumber){
    console.log("Your guess is right !!!");
}
else{
    if(userGuess < winningNumber){
        console.log("too low!!!");
    }
    else{
        console.log("too high");
    }
}

// if - else if - else ladder :-
let tempInDegree = 15;
if(tempInDegree < 0){
    console.log("Extremly Cold Outside");
}
else if(tempInDegree < 45){
    console.log("turn on AC");
}
else{
    console.log("too hot");
}
// output : turn on AC

// Switch statement :-
let day = 2;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
// output : Tuesday
