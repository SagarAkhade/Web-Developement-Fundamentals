// setTimeOut ->>>
// -Syntax 
// setTimeout(callbackfuncton, timeInMS);
// - to run particular function after some time we use setTimeout
// to stop its execution we use clearTimeout(idOfsetTimeout)
// const id = setTimeout(()=>{
//     console.log("in setTimeout")
// }, 1000);
// console.log(id);
//clearTimeout(id); // it will clear the setTimeout completely
// Output: printed in console after 1sec

// setInterval ->>
// setInterval continously run callback function after set time
// clearInterval(idOfsetInterval)
// -Syntax 
// setInterval(callbackfuncton, timeInMS); 
// setInterval(()=>{
//     console.log(Math.floor(Math.random()*10));
// }, 1000);
// Output : generating random number after every 1sec

// Callback ->>>
// - The function which is passed as argument to another function is called callback 
function myFunc(callback){
    console.log("1");
    callback();
}
function myFunc2(){
    console.log("2");
}
myFunc(myFunc2);
// Output : 1 2 - each on next line

// callback hell ->>>
// - calling many functions inside function again again it is called callback hell
// callback hells are simply nested callbacks


// Promises ->>>
// - promise represents the value which we don't know but will know in future
// promise is constructor function or class

const bucket = ['coffee', 'chips','vegetables','salt','rice'];

// produce 
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")){
        resolve("Success");
    }else{
        reject("could not do it");
    }
})

// consume 
// how to consume 

friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })
// Output : lets eat  Success

// Difference between callback and promises :-
// Callbacks are functions passed as arguments into other functions
// Promises are placeholder objects for data that's available in the future.



// fetch API -
// fetch always retruns promise
const URL = "https://jsonplaceholder.typicode.com/posts";

/*
fetch(URL)
    .then(response => response.text())
    .then(data => console.log(data));
*/
// async await ->>>
// - Another method for fetching api 
// - just change in syntax
// using async it will always give promise
async function getPosts(){
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })

