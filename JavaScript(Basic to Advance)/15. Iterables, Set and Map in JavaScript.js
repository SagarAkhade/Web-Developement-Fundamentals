// Iterables, Set and Map in JavaScript

// Iterables :-
// Iterables are those on which we can apply for of loop
// String and array are iterable
// Objects are not iterable
// for in loop used to iterate objects
const firstName = "Sagar";
for(let char of firstName){
    console.log(char);
}
// Output : S a g a r ->> each on next line
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}
// Outout : item1, item2, item3 ->> each on next line

// Sets:-
// Sets are iterable
// Sets are used to store data
// Set is used when we have unique values
// Sets have its own methods
// In Sets no duplicates are allowed
// No index-based access in Sets
// Order is not guaranteed in Sets
// We cannot get length of Set
const numbers = new Set([1, 2, 3]);
console.log(numbers);
// Output : Set(3) {1, 2, 3}
const items1 = ['item1', 'item2', 'item3'];
const numbers1 = new Set();
numbers1.add(1);
numbers1.add(2);
numbers1.add(items1);
numbers1.add(['item1', 'item2']); // these two are different arrays can be add in Set
numbers1.add(['item1', 'item2']);
console.log(numbers1);
// Output : Set(3) {1, 2, Array(3), Array(2), Array(2)}
// has(element_to_be_check) method of Set :-
// It check wether element is present in set or not
// has() method returns boolean(T/F)
if(numbers1.has(1)){
    console.log("1 is present");
}
else{
    console.log("1 is not present");
}
// Output : 1 is present
for(let number of numbers1){
    console.log(number);
}
// Output : all items of set are printed 
//Example - remove dublicates from array
const myArray = [1, 2, 4, 4, 5, 6, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
// Output : Set(5) {1, 2, 4, 5, 6}
let length = 0;  //->>getting length of Set
for(let element of uniqueElements){
    length++;
}
console.log(length); // Output : 5

// Map :-
// Map is iterable 
// Map stores data in order fashion
// Map stores key-value pair(like object)
// In Map duplicate keys are not allowed like objects
// Difference between Map and Object - 
// Object can only have string or symbol as key
// In Map you can use anything as key like arrow, number, string 
// adding key value pair in Map - 
// map.set('key', 'value')
const person = new Map();
person.set('firstName', 'Sagar');
person.set('age', 7);
person.set(1, 'one');
console.log(person); 
// Ouput : Map(3) {'firstName' => 'Sagar', 'age' => 7, 1 => 'one'}
// getting value from map - 
// map.get(key)
console.log(person.get("firstName"));
// Output : Sagar
// getting all keys simultaneously - 
// map.keys()
console.log(person.keys());
// Output : MapIterator {'firstName', 'age', 1}
for(let key of person.keys()){
    console.log(key);
}
// Output : firstName age 1 ->> each on next Line
// for of loop on Map 
// it will give us Array
for(let key of person){
    console.log(key);
}
// Output : 
// ['firstName', 'Sagar']
// ['age', 7]
// [1, 'one'] 
// Another way to initialize Map
const person1 = new Map([["firstName", "sagar"],["age", 7]]);
console.log(person1);
// Output : Map(2) {'firstName' => 'sagar', 'age' => 7}

// Clone using Object.assign :-
// Object.assign is used to clone object
const obj = {
    key1 : "value1",
    key2 : "value2"
}
// const obj2 = {...obj} //->> cloning using spread operator
const obj2 = Object.assign({}, obj);
console.log(obj2);
// Output : {key1: 'value1', key2: 'value2'}

// Optional Chaining :-
// When we try to access the object inside object which not present in it
// it will throws an error. To avoid these errors we use ? 
// ? check if first condition become false it will terminate next 
// and avoid error 
const user = {
    firstName : "Sagar",
    // address: {houseNumber: '1234'}
}
console.log(user.firstName); //Output : Sagar
console.log(user?.address?.houseNumber); //Output : undefined 
