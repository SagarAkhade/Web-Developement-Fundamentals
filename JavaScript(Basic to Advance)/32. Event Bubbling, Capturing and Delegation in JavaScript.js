// Event Bubbling, Capturing and Delegation in JavaScript 

// Event Bubbling and Capturing ->>>
// Event bubbling/propogation ->>
// when we apply event on child and also its parent has eventListener 
// and grandparent of parent has also eventListener.
// When we clicked on child the eventListener automatically applied to all 
// ie. parent and grandparent. It is called as event Bubbling or event propogation
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// child.addEventListener("click", () =>{
//     console.log("You clicked on child");
// })
// parent.addEventListener("click", () =>{
//     console.log("You clicked on parent");
// })
// grandparent.addEventListener("click", () =>{
//     console.log("You clicked on grandparent");
// })
// document.body.addEventListener("click", () =>{
//     console.log("You clicked on body");
// })
// Overall Output : when we clicked on child all events are fired from inside to outside according to series
// Actual Output :
// You clicked on child
// You clicked on parent
// You clicked on grandparent
// You clicked on body

// Capturing ->>
// - during capturing we executes from outside events to inside using third argument true
// - Third argument is passed in .addEventListener as true for capturing
// - By default third argument of .addEventListener is false
// ---capturing---
// child.addEventListener("click", () =>{
//     console.log("captured !!! child");
// }, true)
// parent.addEventListener("click", () =>{
//     console.log("captured !!! parent");
// }, true)
// grandparent.addEventListener("click", () =>{
//     console.log("captured !!! grandparent");
// }, true)
// document.body.addEventListener("click", () =>{
//     console.log("captured !!! body");
// }, true)
// ---bubbling----
// child.addEventListener("click", () =>{
//     console.log("bubbled !!! child");
// })
// parent.addEventListener("click", () =>{
//     console.log("bubbled !!! parent");
// })
// grandparent.addEventListener("click", () =>{
//     console.log("bubbled !!! grandparent");
// })
// document.body.addEventListener("click", () =>{
//     console.log("bubbled !!! body");
// })
// Overall Output : during capturing we executes from outside events to inside using third argument true
// Actual Output : 
// captured !!! body
// captured !!! grandparent
// captured !!! parent
// captured !!! child
// bubbled !!! child
// bubbled !!! parent
// bubbled !!! grandparent
// bubbled !!! body


// Event Delegation ->>>
// - Here we are applying eventListener only for grandparent but it automatically 
// applied on parent and child.  This is called event delegation
// - Using event delgation we avoid unneccessary multiple use of eventListener
grandparent.addEventListener("click", (e)=>{
    console.log(e.target);
})
// Output : Whichever element we select inside grapent that element is printed
// i.e. when clicked on child it printed, 
// clicked on parent it printed, 
// clicked on grandparent it printed
