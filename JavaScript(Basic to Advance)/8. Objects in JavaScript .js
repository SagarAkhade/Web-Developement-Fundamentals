// Objects in JavaScript 

// Objects (Object literal) :-
// Arrays are good but not sufficient for real world data
// Objects are reference type
// Objects stores key-value pair
// Objects don't have index

// Creating Object :-
const person = {
    name : "Sagar", 
    age : 22,
    hobbies : ["gyming", "listening music"]
};
console.log(person);
// Output : {name: 'Sagar', age: 22} hobbies: (2) ['gyming', 'listening music']
console.log(typeof person); // Output : object

// Access data from object :-
console.log(person.name); // Output : Sagar
console.log(person.age);  // Output : 22
console.log(person.hobbies);
// Output : ['gyming', 'listening music']
// Access data using brackets :-
console.log(person["name"]); // Output : Sagar

// Add key-value pair to object
person.gender = "Male";
console.log(person);
// Output : {name: 'Sagar', age: 22, hobbies: Array(2), gender: 'Male'}
// Adding key-value pair to object using brackets
person["favGame"] = "PUBG";
console.log(person);
// Output : {name: 'Sagar', age: 22, hobbies: Array(2), gender: 'Male', favGame: 'PUBG'}

// Difference between dot and Bracket notations :-
// when we want to key with space we need to write it 
// in string it can only access with brackets
const person1 = {
    name : "Sagar", 
    age : 22,
    "person hobbies" : ["gyming", "listening music"]
};
console.log(person1["person hobbies"]);
// Output : ['gyming', 'listening music']
const key = "email";
person1[key] = "abc@xyz.com";
console.log(person1);
// Output : {name: 'Sagar', age: 22, person hobbies: Array(2), email: 'abc@xyz.com'}

// Iterate Object :-
// Using for in loop & object.key
const person2 = {
    name : "Sagar", 
    age : 22,
    "person hobbies" : ["gyming", "listening music"]
};
// for in loop :-
for(let key in person2){
    console.log(person2[key]);
}
// Output : Sagar 22 ['gyming', 'listening music'] ->> each on different lines
for(let key in person2){
    console.log(`${key} : ${person2[key]}`);
}
// Output : 
// name : Sagar
// age : 22
// person hobbies : gyming,listening music

// using object.key :-
const person3 = {
    name : "Sagar", 
    age : 22,
    "person hobbies" : ["gyming", "listening music"]
};
for(let key of Object.keys(person3)){
    console.log(person3[key]);
}
// Output : 
// Sagar
// 22
// gyming,listening music

// Computed properties :-
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";
// creating object using above values
const obj = {
    [key1] : value1,   // ->> This is called Computed properties
    [key2] : value2
}
console.log(obj);
// Output : {objkey1: 'myvalue1', objkey2: 'myvalue2'}

// Spread operator in Objects :-
// Spread operator is used to make clone
// in object keys are always unique
const obj1 = {
    key3 : "value3",
    key4 : "value4"
}
const obj2 = {
    key5 : "value5",
    key6 : "value6"
}
// cloning two objects and adding key-value pair
const newObject = {...obj1, ...obj2, key69: "value69"};
console.log(newObject);
// Output : {key3: 'value3', key4: 'value4', key5: 'value5', key6: 'value6', key69: 'value69'}
// Another way of creating objects using spread
const newObject1 = {...["item1", "item2"]};
console.log(newObject1);
// Output : {0: 'item1', 1: 'item2'}

// Destructuring in Objects :-
// storing values of object using another variables
const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong : "kashmir",
};
// bandName:var1 ->> changing variable name to var1
// ...restProps ->> will store all other properties
let {bandName:var1, famousSong:var2, ...restProps} = band; //->> Destructuring
console.log(var1);
// Output : led zeppelin
console.log(restProps);
// Output : {year: 1968, anotherFamousSong: 'kashmir'}

// Object inside array :-
// very useful in real world applications
const users = [
    {userId: 1, firstName:"Sagar", gender:"male"},
    {userId: 2, firstName:"Harsh", gender:"male"},
    {userId: 3, firstName:"Nitish", gender:"male"},
]
for(let user of users){
    console.log(user.firstName);
}
// Output : Sagar Harsh Nitish ->> each on next line

// Nested Destructuring :-
const usersData = [
    {userId: 1, firstName:"Sagar", gender:"male"},
    {userId: 2, firstName:"Harsh", gender:"male"},
    {userId: 3, firstName:"Nitish", gender:"male"},
]
const [user1, user2, user3] = usersData;
console.log(user1);  //->>destructuring objects
// Output : {userId: 1, firstName: 'Sagar', gender: 'male'}
// firstName:userFirstName ->> changing variable name
const [{firstName: userFirstName, userId}, , {gender}] = usersData; //->> destructuring keys from object
console.log(userFirstName, userId, gender);
// Output : Sagar 1 male
