// new keyword in JavaScript 

// new keyword ->>
// new keyword will create empty object this = {}
// It will return that object this
// new keyword automatically create proto values to its prototype
function CreateUser1(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
CreateUser1.prototype.about = function(){
    console.log(this.firstName, this.age);
};
const user1 = new CreateUser1("sagar", 6);
user1.about();
// Output : sagar 6
// Real world example of new keyword
// The function which will be called by new keyword called as constructor function.
// Constructor function name start with Capital letter.
function CreatUser(firstName, lastName, email, age, address){
    this.firstName = firstName;  //Adding key-value pairs in this Object 
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreatUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old.`;
}
CreatUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreatUser.prototype.sing = function(){
    return "la la la la";
}
const user = new CreatUser("Sagar", "Akhade", "sagar@gmail.com", 18, "my Address");
console.log(user.about());
// Output : Sagar is 18 year old.
console.log(user.is18());
// Output : true

// hasOwnProperty() method ->>
// .hasOwnProperty(key) will return boolean value(T/F)
// This will gives keys only inside main object and not from its prototype
// for in loop is used to iterate through objects
for(let key in user){
    if(user.hasOwnProperty(key)){
        console.log(key);
    }
}
// Output : firstName lastName email age address ->> each on next line

// Array method also has prototype property but in form of Array
let numbers = [1, 2, 3];
console.log(Array.prototype);
// Output : here all methods of array gets printed in form of Array
