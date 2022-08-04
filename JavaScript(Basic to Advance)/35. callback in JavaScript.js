// callback in JavaScript

// Callback ->>>
// - When we are passing function as argument for another function 
// And calling that function inside that another function 
// this is called as callback function
function myFunc(callback) {
    console.log("Function is doing task 1");
    callback();
}
function myFunc2() {
    console.log("Function is doing task 2");
}
myFunc(myFunc2);
// Output : 
// Function is doing task 1
// Function is doing task 2
// Example of callback - add two numbers using callback
function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    }
    else {
        onFailure();
    }
}
getTwoNumbersAndAdd(4, 5, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong Data Types, Please pass numbers only !!!");
});
// Output : 9


// callbacks, callback hell, pyramid of doom ->>>
// Callback hell->
// - callback hell is calling a callback functions inside the functions again and aganin
// - It is also called as nested callback hell
// - Maintaing the callback hell functions is difficult
// Task change the text and color of all h1 tag in given sequence
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

// pyramid of doom ->
// This is part of callback hell
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }else{
                if(onFailureCallback){
                    onFailureCallback();
                }
            }
        } else{
            console.log("your element does not exist");
        }
    }, time)
}
changeText(heading1, "one", "orange", 1000, ()=>{
    changeText(heading2, "two", "purple", 2000, ()=>{
        changeText(heading3, "three", "red", 1000, ()=>{
            changeText(heading4, "four", "pink", 1000, ()=>{
                changeText(heading5, "five", "green", 2000, ()=>{
                    changeText(heading6, "six", "blue", 2000, ()=>{
                        changeText(heading7, "seven", "brown", 2000, ()=>{
                        }, ()=>{console.log("Heading7 does not exist")});
                    }, ()=>{console.log("Heading6 does not exist")});
                }, ()=>{console.log("Heading5 does not exist")});
            }, ()=>{console.log("Heading4 does not exist")});
        }, ()=>{console.log("Heading3 does not exist")});
    }, ()=>{console.log("Heading2 does not exist")});
}, ()=>{console.log("Heading1 does not exist")});
// Output :  This is Pyramid of doom
// Respective text and color changes


