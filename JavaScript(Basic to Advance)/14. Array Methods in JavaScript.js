// Array Methods in JavaScript

// Array Methods :-
// forEach, map, filter, reduce

// forEach loop :-
// forEach loop takes callback function
// Used to iterate through Array
const numbers = [4, 2, 5, 8];
numbers.forEach(function (number, index) {
    console.log(`index is ${index}, number is ${number}`)
});
// Output : 
// index is 0, number is 4
// index is 1, number is 2
// index is 2, number is 5
// index is 3, number is 8
// Ex : multiply each number with 2 and print using forEach loop
numbers.forEach(function (number) {
    console.log(number * 2);
});
// Output : 8 4 10 16  ->> each on next line
// Ex: real world example of forEach
const users = [
    { firstName: "Sagar", age: 22 },
    { firstName: "Garima", age: 20 },
    { firstName: "harshit", age: 21 },
    { firstName: "nitish", age: 25 },
]
users.forEach(function (user) {
    console.log(user.firstName);
});
// Output : 
// Sagar Garima harshit nitish ->> each on same line

// map method :-
// map method take call back function
// map method always returns new array
// map method doesnot change original array
const numbers1 = [3, 4, 6, 1, 8];
const squareNumber = numbers1.map(function (number) {
    return (number * number);
});
console.log(squareNumber);
// Ouptut : [9, 16, 36, 1, 64]
// Real world example of map method 
const users1 = [
    { firstName: "Sagar", age: 22 },
    { firstName: "Garima", age: 20 },
    { firstName: "harshit", age: 21 },
    { firstName: "nitish", age: 25 }
]
const userNames = users1.map(function (user) {
    return user.firstName;
});
console.log(userNames);
// Output : ['Sagar', 'Garima', 'harshit', 'nitish']

// filter method :-
// filter method also takes callback function
// filter method is used to filter array elements
// filter method always returns new array
// filter method always returns boolean and if true comes it
// will add that number in new array
const numbers2 = [1, 3, 2, 6, 4, 8];
const evenNumbers = numbers2.filter(function (number) {
    return (number % 2 === 0);
})
console.log(evenNumbers);
// Output : [2, 6, 4, 8]
const oddNumbers = numbers2.filter((number) => {  //Arrow Function
    return (number % 2 !== 0);
})
console.log(oddNumbers);
// Output : [1, 3]

// Reduced method :-
// Reduce method take callback fuction 
// Here callback function has two parameters (accumulator and currentValue (depends))
// Reduce method always returns single value
// Reduce method gives the sum of all elements 
const numbers3 = [1, 2, 3, 4, 5, 10];
const sum = numbers3.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue);
});
console.log(sum);  // Output : 25
// accumulator  currentValue  return
//      1           2           3  ->> return sum of acc + curr
//      3           3           6  
//      6           4           10
//      10          5           15
//      15          10          25  ->> finally return single value
// Ex : Real world example
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 3, productName: "laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 15000 }
]
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return (totalPrice + currentProduct.price);
}, 0)  // ->> this 0 used to initialize totalPrice
console.log(totalAmount);
// Output : 49000

// Sort method :-
// Sort method will rearange the elements in increasing/decreasing oder
// Sort method will change the original Array
// sort method will sort according to string (covert to ASCII value) 
// Sort method take callback function for sorting numbers
const userName = ["sagar", "harshit", "mohit", "nitish"];
userName.sort();
console.log(userName);
// Output : ['harshit', 'mohit', 'nitish', 'sagar']
const numbers4 = [5, 9, 1200, 400, 3000];
numbers4.sort((a, b) => a - b);  // for ascending order
console.log(numbers4);
// Output : [5, 9, 400, 1200, 3000]
const numbers5 = [5, 9, 1200, 400, 3000];
numbers5.sort((a, b) => b - a);  // for descending order
console.log(numbers5);
// Output : [3000, 1200, 400, 9, 5]
// Ex: real life example of sorting
// price sorting lowToHigh and highToLow
const products = [
    { productId: 1, productName: "p1", price: 300 },
    { productId: 2, productName: "p2", price: 3000 },
    { productId: 3, productName: "p3", price: 200 },
    { productId: 4, productName: "p4", price: 8000 },
    { productId: 5, productName: "p5", price: 500 }
]
// lowToHigh sorted and we storing it in new array
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log(lowToHigh);
// Output : prices will be sorted low to high
// highToLow sorted and we storing it in new array
const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.log(highToLow);
// Output : prices will be sorted high to low 

// find method :-
// find method takes callback function
// It will return single element whose condition is satidfied.
// It returns first satisfied element
const myArray = ["Hello", "cat", "dog", "lion"];
const ans = myArray.find((string) => string.length === 3);
console.log(ans);  // Output : cat
// Ex : real life example 
const users2 = [
    { userId: 1, userName: "Sagar" },
    { userId: 2, userName: "harsh" },
    { userId: 3, userName: "nitish" },
    { userId: 4, userName: "mohit" },
    { userId: 5, userName: "aaditya" }
];
const myUser = users2.find((user) => user.userId === 3);
console.log(myUser);
// Output : {userId: 3, userName: 'nitish'}

// Every method :-
// Every method used to check all elements in array are even or odd(According to conditions)
// Every method returns boolean(T/F) value.
// Every method takes callback function
const numbers6 = [2, 4, 6, 8, 10];
const isEven = numbers6.every((number) => number % 2 === 0);
console.log(isEven);   // Output : true
// Ex : real world example
// check if every product price is less than 30000
const userCart1 = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 3, productName: "laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 35000 }
]
const ans1 = userCart1.every((cardItem) => cardItem.price < 30000);
console.log(ans1);  // Output : false

// Some method :- 
// some method will check if any number in array is even/odd
// (According to conditions passed)
// Some method take callback function 
// Some method returns boolean(T/F) value.
const numbers7 = [3, 5, 11, 9];
const a = numbers7.some((number) => number % 2 === 0);
console.log(a); // Output : false 
// Ex : real world example
// To check any products price above 1lac
const userCart2 = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 3, productName: "laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 35000 },
    { productId: 3, productName: "macbook", price: 250000 }
];
const isAbove1L = userCart2.some((cardItem) => cardItem.price > 100000);
console.log(isAbove1L);   // Output : true

// fill method :-
// fill method is used to fill many values from user
// fill method also used to change values in current array
// fill method modifies the original array
// fill(valueToAdd, startIndex, endIndex) ->> will change initial values in given array
// by valueToAdd starting from startIndex given and end at endIndex - 1
const myArray1 = new Array(10).fill(0);
console.log(myArray1);
// Output : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
myArray2.fill(0, 2, 5); //->> replace elements between index 2 to 4 with 0
console.log(myArray2);
// Output : [1, 2, 0, 0, 0, 6, 7, 8]

// Splice method :-
// Splice method is used to add or delete something from array
// Splice method will change original array
// the deleted element is also gets returned
const myArray3 = ['item1', 'item2', 'item3'];
// delete ->>
// splice(startIndex, numberOfItemsToDelete)  
const deletedItem = myArray3.splice(1, 1);
console.log(myArray3); // Output : ['item1', 'item3']
console.log(deletedItem);   // Output : ['item2']
// insert ->>
// splice(startIndex, numberOfItemToDelete, itemsToBeInsert)
myArray3.splice(1, 0, "inserted item");
console.log(myArray3);
// Output : ['item1', 'inserted item', 'item3']
// insert and delete together ->>
// it will first delete items and then insert 
// And deleted items also gets returned 
const myArray4 = ['item1', 'item2', 'item3'];
const deletedItem1 = myArray4.splice(1, 2, "inserted item1", "inserted item2");
console.log(myArray4);
// Output : ['item1', 'inserted item1', 'inserted item2']
console.log(deletedItem1);
// Output : ['item2', 'item3']
