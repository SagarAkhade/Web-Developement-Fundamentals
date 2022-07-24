// OOPs in JavaScript 

// OOPs(Object Oriented Programing) in JS :-
// function inside object is called method
const user = {
    firstName : "sagar",
    lastName : "akhade",
    age : 2,
    email : "sagar@gmail.com",
    address : "House number, Colony, pincode, state",
    about : function(){
        return `${this.firstName} is ${this.age} year old.`;
    },
    is18: function(){
        return this.age >= 18;
    }
}
// for creating multiple users data this will not work
// So we creating a function which create a object
// add key-value pair in it and return created object
// we have created separate object to store methods 
// to avoid huge memory waste
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} year old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};  //creating empty object 
    user.firstName = firstName;  //Adding key-value pairs in Object 
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user1 = createUser('sagar', 'akhade','sagar@gamil.com',18, "my address");
console.log(user1);
// Output : complete user1 object will printed 
console.log(user1.is18());
// Output : true
const about = user1.about();
console.log(about);
// Output : sagar is 18 year old.
// In above there is an issue that when we want 
// multiple methods inside object will be tidious

// Store methods in different Objects :-
// Proto :- 
// Proto is used when we want to get key-value pair which is not 
// present in current object but it will go to other object and search
// for the required key-value pair
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
// creating an empty object which will have reffernce to obj1
// This is called as proto
const obj2 = Object.create(obj1);
obj2.key3 = "value3";  //adding value to obj2
console.log(obj2);
// Output : {key3: 'value3'}
console.log(obj2.key1);  //here it will search to obj1 for key1 -> this is proto
// Output : value1
console.log(obj2.__proto__);  // this also called dunder
// Output : {key1: 'value1', key2: 'value2'}
// this proto can be written as :-
// __proto__ or [[prototype]] ->> both are same
// application of proto :-
const userMethods1 = {
    about : function(){
        return `${this.firstName} is ${this.age} year old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser1(firstName, lastName, email, age, address){
    const user = Object.create(userMethods1); //creating empty object with proto chain
    user.firstName = firstName; //adding key-value pair to object
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
const user3 = createUser1("Sagar", "Akhade", "sagar@gmail.com", 18, "my Address");
console.log(user3.about());
// Output : Sagar is 18 year old.
console.log(user3);
// Output : all properties in user3 will be printed
