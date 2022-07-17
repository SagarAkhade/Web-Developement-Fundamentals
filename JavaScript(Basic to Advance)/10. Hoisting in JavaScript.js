// Hoisting in JavaScript

// Hoisting :-
// calling a function before its declarazation is called Hoisting behaviour
// Hoisting only works with function declaration and not with function Expression Or Arrow function

hello();  // calling function before inititalization only done with function declaration
function hello() {  //function declaration
    console.log("Hello world");
}
// Output : Hello world

// function inside function :-
// Its just function inside other and calling it if needed in same function
const app = () => {
    const myFunc = () => {
        console.log("hello from myFunc");
    }

    const addTwo = (num1, num2) => num1 + num2;
    
    const mul = (num1, num2) => num1 * num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3)); 
    console.log(mul(2,3));
}
app(); 
// Output : 
// inside app
// hello from myFunc
// 5
// 6
