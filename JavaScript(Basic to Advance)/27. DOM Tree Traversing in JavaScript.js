// DOM Tree Traversing in JavaScript

// DOM Tree ->>>
// - First browser will create document object and it will contain all HTML elements
// - This document object is called Root Node 
// - HTML element is root element of documnet object.
// - And below everything is child node of HTML
const rootNode = document.getRootNode();
console.log(rootNode);
// Output : doucment object is printed 

// Traversing DOM Tree ->>
// .childNodes :-
// - for getting childs 
console.log(rootNode.childNodes);
// Output : childs of root node printed in NodeList format. NodeList is Array link object
const htmlElementNode = rootNode.childNodes[1];
console.log(htmlElementNode);  //i.e html
// Output : Second child of root node printed
console.log(htmlElementNode.childNodes);
// Output : NodeList(3) [head, text, body] - All child nodes of html printed
const headElementNode = htmlElementNode.childNodes[0];  //i.e. head
console.log(headElementNode);
// Output : head node printed 
const textNode1 = htmlElementNode.childNodes[1];     //i.e. text (Consist of newLine and space)
console.log(textNode1);
// Output : text node printed
const bodyElementNode = htmlElementNode.childNodes[2];  //i.e. body
console.log(bodyElementNode);
// Output : body node printed

// .parentNode :-
// it will give parent of node 
console.log(headElementNode.parentNode);
// Output : html object, parrent of head printed

// sibling ralation :-
// - siblings have same parent 
// .nextSibling used to see the siblings of tag
console.log(headElementNode.nextSibling); 
// Output : #text  : next sibling of head 
console.log(headElementNode.nextSibling.nextSibling);
// Output : body object printed which next sibling of text object
console.log(headElementNode.nextElementSibling);  // ignores the text-nodes
// Output : gives body object. It will ignores the text-nodes

// children property :-
// - when we don't want textNode we used children property
// - Ignores all textNode children
const container = document.querySelector(".container");
console.log(container.children); 
// Output : HTMLCollection(2) [h1, p] - gives HTMLCollection

// Task : Change text color and backgroundColor of parent of h1 tag
const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333";

// Selecting body directly -
const body = document.body;
console.log(body);
// Output : body object directly gets selected

// Traversing head :-
const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title);
// Output : <title>DOM Traversing</title> -- title gets printed
