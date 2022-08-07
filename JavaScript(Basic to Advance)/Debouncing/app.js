// Debouncing in JavaScript

// Debouncing ->>>
// - Most important concept for performance optimization by limiting 
// function calls on different events(typing events, scroll event, resize event,
// on other keyboard/mouse events)

// Input Events ->>
// - Events -> keyup, keypress, keydown, input, change
// keyup event -> 
// - when we press any key and after removing finger from that key this event will be called
// const myInput = document.getElementById("input-event");
// myInput.addEventListener("keyup", ()=>{
//     console.log(myInput.value);
//     // Output : whenever we press any key and on releasing it that key gets printed in console 
// })

// keypress event ->
// - Whenever we press any key this event will be called immediately 
// - this event may contains bugs so avoid to use it
// myInput.addEventListener("keypress", ()=>{
//     console.log(myInput.value);
//     //Output : whenever we press any key it immediately printed in console 
// })

// keydown event ->
// - Whenever we press any key this event will be called immediately 
// - this event may contains bugs so avoid to use it
// myInput.addEventListener("keydown", ()=>{
//     console.log(myInput.value);
//     //Output : whenever we press any key it immediately printed in console 
// })

// Input event ->
// - when we press any key this event will be called
// - Most prefer to use is input event over the keyup
// myInput.addEventListener("input", ()=>{
//     console.log(myInput.value);
//     //Output : whenever we press any key gets printed in console 
// })

// Change event -> 
// - whenever we write something in input field and click outside 
// that input field this event will be called
// myInput.addEventListener("change", ()=>{
//     console.log(myInput.value);
//     //Output : whenever we write something in input field and 
//     //click outside input field it printed in console 
// })


// Decorator functions ->
// - We pass function to Decorator function it will add some extra features in that 
// funtion will gives back decorated function 
// - When we want to increase the functionality of any function 
// without changing it original code then we use decorator function
// - Decorator function takes function and return function
function decorator(func){
    return function(...args){  //for passing multiple arguments we pass the ...args
        console.log("You are calling decorated function");
        func.call(this, ...args);
    }
}
function hi(name){
    console.log("Hi", name);
}
const decoratedHi = decorator(hi);
decoratedHi("Sagar");
// Output : 
// You are calling decorated function
// Hi Sagar


// Debouncing ->>>
// - Debounce is function which will take a function and delay time as a input parameters
// - Debounce is decorator function with some delay time
// - Example - when we want to search something in search box, debounce function is 
// used for triggering autosuggetions after some delay time
function debounce(func, delay){
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func.call(this, ...args);
        }, delay);
    }
}
const myInput = document.getElementById("input-event");
function findSuggestions(e){
    console.log("suggestions for ", e.target.value);
}
const decoratedFindSuggestions = debounce(findSuggestions, 2000);

myInput.addEventListener("input", decoratedFindSuggestions);
// Output : we get suggestions in console when we wait for more than 2s this event gets fired
