// Promise in JavaScript 

// Promise ->>>
// - Promise are those whose value is available to us in future
// - Promise is browsers feature 
// - Promises are added in Microtask queue and callbacks are are added in callback queue
// - After all execution of code done then event loop forward promises from Microtask queue to callstack
// - Actual Execution of code done through callstack in js 
// - Promises has more priority than callbacks
// - Event loop first pass the promises from the microtask queue to callstack 
// and then callbacks from callback queue to callstack
// - promise takes callback funcion
// - the parameters of promises are also callback functions - resolve and reject
// - We need to consume that promise after creating
// - promiseName.then(onResolveCallback).catch(onRejectCallback) 
// - then method is used when promise is resolve .then(callbackFunction)
// - catch method if promise is rejected then it goes to catch method .catch(callbackFunction)
// - Promises are placeholder objects for data that's available in the future.

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
// we are created promise here 
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice");
    } else {
        reject("Couldn't do it");
    }
})
// we are consuming promise 
friedRicePromise.then((myFriedRice) => {
    console.log("lets eat", myFriedRice);
}
).catch((error) => {
    console.log(error);
})
// Output : lets eat Fried Rice
setTimeout(() => {
    console.log("Hello from setTimeout");
}, 0);
// Output : Hello from setTimeout


// Function returning promise->>>
// - for function returning promise, to call it just use parenthesis() and use .then() and .catch method
function ricePromise() {
    const bucket1 = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject) => {
        if (bucket1.includes("vegetables") && bucket1.includes("salt") && bucket1.includes("rice")) {
            resolve("Fried Rice");
        } else {
            reject("Couldn't do it");
        }
    })
}
ricePromise().then((myFriedRice) => {
    console.log("lets eat", myFriedRice);
}).catch((error) => {
    console.log(error);
})
// Output : lets eat Fried Rice


// Promise and setTimeout simulataneously ->>>
// - for promise to execute after sometime we can use setTimeout for delay like this
function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(() => {
            if (value) {
                resolve();
            }
            else {
                reject();
            }
        }, 2000)
    })
}
myPromise()
    .then(() => { console.log("resolved"); })
    .catch(() => { console.log("rejected") })
// Output : resolved   - executed after 2s


// Promise.resolve ->>>
// Promise.resolve(value) - this will always return resolved promise and also return value back
const myPromise1 = Promise.resolve(5);
myPromise1.then((value) => { console.log(value) });
// Output : 5


// Promise chaining ->>>
// - Applying then() method again and again on single promise, 
// this is called promise chaining
// .then() method ->
// - .then() method always returns the promise
function myPromise2() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}
myPromise2()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value;  // here it is returning another promise, by default it return undefined
    })
    .then((value) => {
        console.log(value);
        value += "baaz";
        return value;
    })
    .then((value) => {
        console.log(value);
    })
// Output : foo
// Output : foobar
// Output : foobarbaaz


// Now we are using promise to change the text 
// and color of h1 which is previously done by callback hell :-
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("Element not found");
            }
        }, time)
    })
}
changeText(heading1, "one", "red", 1000)
    .then(() => { return changeText(heading2, "two", "purple", 1000); })
    .then(() => { return changeText(heading2, "two", "purple", 1000); })
    .then(() => { return changeText(heading3, "three", "green", 1000); })
    .then(() => { return changeText(heading4, "four", "orange", 1000); })
    .then(() => { return changeText(heading5, "five", "yellow", 1000); })
    .then(() => { return changeText(heading6, "six", "blue", 1000); })
    .then(() => { return changeText(heading7, "seven", "cyan", 1000); })
    .catch((error)=>{ alert(error); })

