// Methods in JavaScript 

// Methods :-
// function inside object is called Method
// here `this` is object inside that function
// this represents person here in below example
const person = {
    firstName : "sagar",
    age : 18,
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
person.about(); // calling function inside object
// Output : person name is Sagar and age is 18

// This keyword :-
// this is window object
// Generally this keyword is used to get name of main object 
console.log(this);
// Output : it gives default window object
