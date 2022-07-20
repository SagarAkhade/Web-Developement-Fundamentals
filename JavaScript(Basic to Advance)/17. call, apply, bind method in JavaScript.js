// call, apply, bind method in JavaScript

// call() method :-
// call method is used to borrow method from object
// call method will check value for this keyword,and for parameters if any
// user1.about.call(valueForThisKeyword, anyNumberOfParameters);
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "sagar",
    age : 8
}
const user2 = {
    firstName : "mohit",
    age : 9,
}
about.call(); //->>asked in interviews
// Output : undefined undefined undefined undefined
about.call(user2,"guitar","moazrt");
// Output : mohit 9 guitar moazrt

// apply method :-
// apply method is similar to call method 
// only difference is that extra arguments are passed in array form
// about.apply(valueForThisKeyword, ["extraArguments"]);
about.apply(user1, ["guitar","bach"]);
// Output : sagar 8 guitar bach

// bind() method :-
// similar to call method
// bind method will return function
const func = about.bind(user1, "guitar", "bach");
func();
// Output : sagar 8 guitar bach

// arrow functions for call, apply, bind :-
// arrow function have this keyword only from its surrounding 
const user3 = {
    firstName : "sagar",
    age: 8,
    about : () => {
        console.log(this.firstName, this.age);
    }
}

// Short hand to create method inside object
const user4 = {
    firstName : "sagar",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }
}
user4.about();
// Output : sagar 8

