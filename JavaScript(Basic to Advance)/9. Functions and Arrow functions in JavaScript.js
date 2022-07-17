// Functions and Arrow functions in JavaScript 

// Function Declaration (Creating function and calling it):-
function singHappyBirthday(){
    console.log("Happy Birthday to you....");
}
singHappyBirthday();  // ->> calling function (invoke/run)
// Output : Happy Birthday to you....
function sumTwoNumbers(number1, number2){  // ->>reusable function (number1, number2 are called parameters)
    return number1 + number2;
}
const returnedValue = sumTwoNumbers(9, 5); //->> 9 & 5 are called arguments
console.log(returnedValue); // Output : 14

// Some Extra
console.log(undefined + undefined); 
// Output : NaN (not a number)

// Ex : Check number is Even
function isEven(num) {
    if(num % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(5)); // Output : false
// Ex : Create a function which get string and return it firstCharacter
function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("Sagar")); //Output : S
// Ex : Make a function which takes array and target
// And if target found in array return its index
function findArray(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
const myArray = [1, 5, 9, 27, 6];
let target = 9;
console.log(findArray(myArray, target));
// Output : 2

// Function Expression :-
// Storing functions in variables is called Function Expression
const abc = function(){
    console.log("This is Function Expression");
}
abc(); // output : This is Function Expression

// Arrow Functions :-
const arrowFun = () => {
    console.log("I am Arrow function");
}
arrowFun(); // Output : I am Arrow function
const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
console.log(addThree(1, 2, 3));  // Output : 6
// If we have single parameter we can remove parenthesis(Only for single parameter)
const checkIfEven = num => {
    return (num % 2 === 0);
}
console.log(checkIfEven(10)); // Output : true
// when we have single returning value we can write it as this
const checkIfEven1 = num => (num % 2 === 0);
console.log(checkIfEven1(5)); // Output : false
