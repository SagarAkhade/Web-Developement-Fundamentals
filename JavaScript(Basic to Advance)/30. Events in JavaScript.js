// Events in JavaScript

// Events ->>>
// - Means when we click on button or press any key then something will happen 
// this is called as Events.
// Most important event is onclick  event
// - There are 3 ways of adding event
// 1) Directly write attribute in HTML tag ->
//  onclick = "js code" will fire this event onclick 
// Ex : HTML code - <button class="btn btn-headline" onclick="console.log(`You clicked me`)">Learn more</button>

// 2) Select that element and write function to it using .onclick property ->
// - But this method works only for one operation, so we are not using this 
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     //console.log("you clicked me !!");
// }
// Output : you clicked me !! - When we click button it printed 

// 3) addEventListener() method ->
// .addEventListener("typeOfEventName", functionToGetExecuted)
// - We mostly using this method
// - click is event fired when we left click from mouse
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });
// Output : you clicked me !!!! - when we clicked button
// Using Arrow function -
// btn.addEventListener("click", ()=>{
//     console.log("you clicked me !!!!");
// });
// Output : you clicked me !!!! - when we clicked button

// this keyword using events ->>
// In case of normal fuction value of this is element itsef -
// const btn1 = document.querySelector(".btn-headline");
// btn1.addEventListener("click", function(){
//     console.log(this);
// })
// Output : button element is printed
// In case of arrow fuction value of this is window object -
// - For arrow function  this is always takes value one step above
// btn1.addEventListener("click", ()=>{
//     console.log(this);
// })
// Output : window object is printed


// Working with multiple elements ->>>
// Added to index3.html
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log("You clicked Me!!")
// });
// Output : You clicked Me!! - when we click first button
// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }
// Output : when we click any button its text is printed in console


// Event object ->>>
// Whenever we add event listener on element
// JS Engine - will execute the code line by line
// browser - has JS Engine + extra features
// i.e. browser - JS Engine + webAPI
// When browser knows that user has perform event which he was listening
// Then browser will perform two tasks - 
// 1. first callback function is passed to JS engine
// 2. Along with callback function it will pass event information also 
// - That event information is in form of object
// - Browser is passing that object as argument for callback function of event listener
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(event){
//     console.log(event);  //Here this is for firstButton only
// })
// Output : event object is printed on clicking button


// .target & .currentTarget property ->
// .target & .currentTarget both are nearly same
// when we use .currentTarget property then it gives from which element it get fired 
// const allButtons = document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click", function(e){
//         console.log(e.currentTarget);
//     })
// }
// Output : Current clicked button will printed 


// How events work behind seen ->>>
// - Browser -  JS Engine + WebAPI (Application Program Interface)
// Browser first execute the normal code first 
// And then add events in queque to get executed sequencially as the event is called 
// After code execution these events which are in queque get executed as per sequence 
// - The Below code shows how events work
// console.log("script start !!!");
// const allButtons = document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<=1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })
// let outerVar = 0;
// for(let i=0; i<=100000000; i++){
//     outerVar += i;
// }
// console.log(outerVar);
// console.log("script end !!!");

// Practice question : On event click the background of button changes to yellow and color grey
const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})
