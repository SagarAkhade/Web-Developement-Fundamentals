// Synchronous and Asynchronous programing in JavaScript

// Synchronous and Asynchronous ->>>
// Synchronous programing ->
// - JavaScript is Synchronous and Single threaded programing language 
// - Synchronous means line-by-line execution of program
// - one task is completed then next task gets executes
// console.log("scipt start");
// for(let i = 0; i < 100; i++){
//     console.log("Hey There");
// }
// console.log("script end");
// Output : execution is done lin-by-line
// scipt start
// 100 Hey There
// script end

// Asynchronous programing ->
// - In asynchronous programing we can execute code within any line 
// - setTimeout and setInterval are examples of asynchronous programing


// setTimeout ->>>
// - setTimeout is used when we want to run particular function after the specific time
// Syntax - setTimeout(callbackFunction, timeInMilliSeconds)
// - setTimeout functionality is of browser
// - first setTimeout given to browser for given time and after it passed to callback queque
// - After all execution of code is over then event loop pass this setTimeout function to callstack for execution
// - Even when we put 0 ms time for setTimeout it will executes after the all code is executed
// - Because event loop stop it in callback queque before going in callstack
// console.log("script start")
// const id =  setTimeout(()=>{
//     console.log("inside setTimeout");
// }, 1000);
// console.log("script end");
// Output : 
// script start
// script end
// inside setTimeout - executed after 1 sec

// clearTimeout ->
// - clearTimeout is used to cancel callback function given by setTimeout
// - setTimeout returns us its ID
// - Using this ID setTimeout is canceled
// Syntax - clearTimeout(idOfSetTimeout);
// clearTimeout(id);
// Output : cancels the setTimeout function


// setInterval ->>>
// - setInterval is same as setTimeout but it continously executes after the give time interval
// Syntax - 
// setInterval(callbackFunction, timeInMilliSeconds)
// cleatInterval ->
// Syntax - cleatInterval(idOfsetInterval)
// clearInterval is used to cancel the setInterval 
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());  //- Math.random generates random numbers between 0 to 1
// }, 1000);
// console.log("script ends");
// Output : 
// script start
// script ends
// random numbers between 0 to 1 printed after 1s of intervals

// Small example of setInterval :-
// Changing background color using set interval
// index5.html file used  
const body = document.querySelector("body");
const button = document.querySelector("button");
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
}, 1000);

button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
})
