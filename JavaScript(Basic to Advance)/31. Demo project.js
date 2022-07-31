// Demo project
//  Project : Create Random Color on body
// Logics used :-
// color value of rgb goes from 0 to 256
// Math.random() method - gives random value from 0 to 1
// Math.floor(2.05) method - gives rounded of value
// for generating random numbers from 0 to 256
// const random = Math.floor(Math.random() * 256)
const mainButton = document.querySelector("button");
const body = document.body;
const span = document.querySelector("span");

function randomColorGenerator(){
    const red =  Math.floor(Math.random() * 256);
    const green =  Math.floor(Math.random() * 256);
    const blue =  Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
})
