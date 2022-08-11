// DOM in JavaScript 

// DOM ->>>
// - DOM(Documnet Object Model) 
// - Using DOM we have access to complete HTML page
// - DOM has all elements of HTML page
// - Using DOM we can change the properties of HTML page 
console.dir(document);
// This will give us all information of document on console


// Select elements of HTML page ->>
// Select element using get element by id ->
// - Select element using get element by id, we must need any element in HTML page with some id
// document.getElementById("nameOfId") is work only with id
console.log(document.getElementById("main-heading"));
// Output : <h2 id="main-heading">Manage your tasks</h2>  ->> it is an object 
console.log(typeof document.getElementById("main-heading"));
// Output : object
const mainHeading = document.getElementById("main-heading");

// Select multiple elements using getElement by class name ->
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);   // will give array like object 
// Output : all elements with class nav-item printed
console.log(navItems[0]);  //same properties as array
// Output : first elements with class nav-item printed

// Select element using query selector ->
// document.querySelector(".classOr#IdName") - works for selecting id as well as classes
// for selecting id use #
// for selecting class use .
// document.querySelectorAll - will select all classes/elements. And it gives node list 
const mainHeading5 = document.querySelector("div.headline h2");
console.log(mainHeading5);
// Output : it will give h2 inside the first div same as in css selector
const mainHeading1 = document.querySelector("#main-heading");  //selecting id
console.log(mainHeading1);
// Output : h2#main-heading  - it is object
const header = document.querySelector(".header"); //selecting class
console.log(header);
// Output : print all inside header
const navItem = document.querySelector(".nav-item");
console.log(navItem);
// Output : this will print only first and ignores the rest
const navItemAll = document.querySelectorAll(".nav-item");
console.log(navItemAll);
//  Output : this will print all classes in Nodelist form

// Select element using tag name ->
const tag = document.getElementsByTagName("a");
// it will select all a tags


// Loops in DOM ->>
// Loops are used to iterate over multiple classes or tags and add some properties on it
// simple for loop, for of loop, forEach method- for iterations
// we can't use forEach method to iterate through HTMLCollection
// Array like object - has only indexing, length property
// loops on HTMLCollection->
const navItems2 = document.getElementsByTagName("a");  //it gives HTMLCollection
console.log(navItems2.length);  // Output : 3
// Changing the backgroundColor and color using loop
for (let i = 0; i < navItems2.length; i++) {
    const navItem = navItems2[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeigth = "bold";
}
// Output : all items style properties gets applied 
// loops on NodeList->
// With Nodelist we can use all loops 
// Simple for loop, for of loop and also forEach loop works
// Nodelist is given by .querySelectorAll("a")
const navItems3 = document.querySelectorAll("a");
navItems3.forEach((navItem) => {
    navItem.style.padding = "0.2rem";
});
// Output : padding is added all a tags


// Change Text in page ->>
// textContent and innerText -> 
// mainHeading2.textContent - gives the text of page
// textContent property - used to change the content on webpage
// textContent property will show all content which is in HTML page
// innerText property will only show the content wich is on webpage. 
// This is main difference between textContent and innerText
const mainHeading2 = document.getElementById("main-heading");
console.log(mainHeading2.textContent);
// Output : Manage your tasks Hello
// mainHeading2.textContent = "This is something else"; // This will change the content
// console.log(mainHeading2.textContent);
// Output : This is something else
const mainHeading3 = document.getElementById("main-heading");
console.log(mainHeading3.innerText);
// Output : Manage your tasks 


// Change the style of element ->>
// .style property gives all styles related to particular element 
// .style is also used to change the styles of element
// Syntax : mainHeading4.style.cssProperty = "value";
// mainHeading4.style.color = "blue"; ->> will change the color
// In JavaScript only camelCase used (Ex: backroundColor), 
// dash in css property will gives error (Ex: backgound-color)
// Ex: mainHeading4.style.backgroundColor = "red"; right
// mainHeading4.style.background-color = "red"; wrong
const mainHeading4 = document.querySelector("div.headline h2");
console.log(mainHeading4.style);
// Output : all the css properties gets printed
mainHeading4.style.color = "blue";  // changes the color to blue
mainHeading4.style.backgroundColor = "yellow";
mainHeading4.style.border = "2px solid green";
mainHeading4.style.padding = "0.1rem"


// getAttribute and setAttribute in Dom ->>
// .getAttribute("attribute_name")  - will give the attribute value
// .setAttribute("attribute_name","changed_attribute_value") - will change attribute value
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
// Output : #home
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));
// Output : https://codprog.com
const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));
// Output : text


// innerHTML ->>
// Anything which is written inside particular element is its innerHTML
// For example <div> Hello </div> - Hello is innerHTML for this div tag
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// Output : Everything inside headline printed
headline.innerHTML = "<h1>Inner HTML changed</h1>";
headline.innerHTML += `<button class="btn">Learn More</button>`;
// Evering inside headline changed with above text given by us
