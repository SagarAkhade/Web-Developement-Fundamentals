// lexical Scope in JavaScript 

// When we calling any value from function inside function
// but that value is not present in that inside function
// then it try to access ouside it but inside of main function
// And if value is also not present in main function then
// it goes to all file and check for value
// this is called as Lexical Scope.
// And this completely become Lexical environment(Or Lexical Chaining) for it.
const myVar = "value1";
function myApp() {  
    function myFunc1(){ 
        const myFunc2 = () => { 
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    } 
    console.log(myVar);
    myFunc1();
}
myApp();
// Output : 
// value1
// inside myFunc value1
