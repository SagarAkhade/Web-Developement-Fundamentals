// Prototype in JavaScript 

// Prototype :-
// In JavaScript function is combination of (function + object)
// When we create a function it gives us freespace 
// that freespace is called prototype
// Prototype is empty object only provided with functions
// Only declarative and expression functions provide prototype property
// Arrow functions don't provide prototype property
// Prototype and proto are completely different things
function hello(){
    console.log("hello world");
}
console.log(hello.name);  // .name property ->> used to get name of function
// Output : hello
// we can add our own properties also
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);
// Output : very unique value
console.log(hello.prototype);  // ->> this will create an freespace that is object and called prototype
// Output : {constructor: ƒ}
// Adding key-value pair to prototype :-
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "Lalalala"
}
console.log(hello.prototype);
// Output : {abc: 'abc', xyz: 'xyz', sing: ƒ, constructor: ƒ}
console.log(hello.prototype.sing());
// Output : Lalalala
// Real world Example of Prototype :-
function creatUser(firstName, lastName, email, age, address){
    const user = Object.create(creatUser.prototype);  //creating empty object. This is proto 
    user.firstName = firstName;  //Adding key-value pairs in Object 
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
creatUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old.`;
}
creatUser.prototype.is18 = function(){
    return this.age >= 18;
}
creatUser.prototype.sing = function(){
    return "la la la la";
}
const user = creatUser("Sagar", "Akhade", "sagar@gmail.com", 18, "my Address");
console.log(user.about());
// Output : Sagar is 18 year old.
console.log(user.is18());
// Output : true
