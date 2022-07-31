// ClassList, Add HTML element in JavaScript

// Note - work with index1.html & style1.css file 
// ClassList ->>>
// .clasList property used to get number of classes particular tag has
const sectionTodo = document.querySelector('.section-todo');
console.log(sectionTodo);
// Output : section tag with section-todo class gets printed 
console.log(sectionTodo.classList);
// Output : DOMTokenList(3) ['section-todo', 'container', 'abc', value: 'section-todo container abc']

// Adding class to elements ->
// .classList.add("classNameToAdd") - will add the class to given element
// sectionTodo.classList.add("bg-dark");
// Output : the given class is added to element 

// Removing class from element ->
// .classList.remove("classToBeRemove") - will remove the class from an element
// sectionTodo.classList.remove("container");
// Output : will remove container class from element

// Check any class is present in element or not ->
// .classList.contains("className"); - will check if class present in element or not 
// - It gives boolean value (T/F)
const ans = sectionTodo.classList.contains("container");
console.log(ans);
// Output: true 

// toggle class property ->
// .classList.toggle("className") - to toggle any class we use this property
// toggle meaning - if any class is not present in element it will add that class, 
// and if class is already present it will remove that class
// sectionTodo.classList.toggle("bg-dark");
// Output : as bg-dark class is not present in element it will add that class

// Practicing ClassList 
const header = document.querySelector(".header");
console.log(header.classList);
// Output : DOMTokenList ['header', value: 'header']
// header.classList.add("bg-dark");
// Output : bg-dark class is added in header element


// Add HTML element using JavaScript on webpage->>>
const todoList = document.querySelector(".todo-list");
// innerHTML to add html element ->>
// - When we want to change original element or new elements we can use innerHTMl. 
// - But when we want to add multiple element keep original also do not use innerHtml
// in this case it will down the performance
// todoList.innerHTML += `<li>New Todo</li>`;
// todoList.innerHTML += `<li>teach students</li>`;
// Output : new two elements are added on webpage

// documnet.createElement() ->>
// Mostly document.createElement() is used
// document.createElement("writeTagNameToBeInsert") - method is used to add 
// new element on webpage in most efficient way
// .append() method->
// .append(newCeatedElement) method will append(i.e. add last) new created element after the original element 
// here we use newTodoItem.textContent = "teach students" - to added content in it
const todoList1 = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "teach students"
todoList1.append(newTodoItem);
// Output : new element is added after original element in webpage

// .prepend() method->
// .prepend(newCeatedElement) method will prepend(i.e. add first) new ceated element at start of the original element 
const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Added before";
todoList1.prepend(newTodoItem1);
// Output : new element is added at start of original element on webpage

// remove() method ->
// .remove() method will remove the element from webpage
const todo1 = document.querySelector(".todo-list li");
todo1.remove();
// Output : remove the element from webpage

// before and after method ->
// - In before and after method it apply on webpage completely before or after the element respectively.
// element.before(newElementToInsert) - added before of that complete element
const todo2 = document.querySelector(".todo-list li");
const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "Using before property";
todo2.before(newTodoItem2);
// Output : Added new Element completely before selected element
// element.after(newElementToInsert) - added after of that complete element
const newTodoItem3 = document.createElement("li");
newTodoItem3.textContent = "Using After property";
todo2.after(newTodoItem3);
// Output : Added new Element completely after selected element


// element.insertAdjacentHTML("where", "html") ->
// - This is another method to create and add an element in webpage but not much in use
// This method has follwing attributeds as beforebegin, afterbegin, beforeend, afterend
// Syntax - .insertAdjacentHTML("whereToAdd", "whtaHTMLToAddOnWebpage");
// This is not mostly used 
// beforeend :- add to last of element(same as append)
const todoList3 = document.querySelector(".todo-list");
todoList3.insertAdjacentHTML("beforeend", "<li>beforeend Added using insertAdjecntHTML</li>");
// Output : It will add to last of element 
// afterbeging :- add to start of element(same as prepend)
todoList3.insertAdjacentHTML("afterbegin", "<li>afterbegin Added using insertAdjecntHTML</li>");
// Output : It will add to start of element 
// beforebegin :- It will add the element completely before that element 
todoList3.insertAdjacentHTML("beforebegin", "<li>beforebegin Added using insertAdjecntHTML</li>");
// Output : add that element completely before the element 
// afterend :- It will add the element completely after that element 
todoList3.insertAdjacentHTML("afterend", "<li>afterend Added using insertAdjecntHTML</li>");
// Output : add that element completely after the element 


// Clone node ->>>
// cloneNode() method is used when we want copy of same node(i.e. createdElement) 
// deep cloning -> .cloneNode(true) : for deep cloning (i.e. should have all properties of parent) we use true
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo";
const li2 = li.cloneNode(true);  // true for deep cloning
ul.append(li);
// Output : new created element added to end of element
ul.prepend(li2);
// Output : new created element added to start of element


// Some old methods to support poor IE(Internet Explorer) ->>>
// - These modern methods to create elements are not supported in IE
// - So these are some old methos works in IE
// - appendChild, insertBefore, replaceChild, removeChild
const ul1 = document.querySelector(".todo-list");
const li1 = document.createElement("li");
li.textContent = "Insert After Using Old method for IE";
// .appendChild() : Add new created element at last of given element
ul1.appendChild(li1);
// Output : added new created element at last of given element

// .insertBefore(initialElement, createdElement) method :- will add new element before the selected element
const referenceNode = document.querySelector(".first-todo");
ul.insertBefore(li, referenceNode);
// Output :  add new element before the selected element

// .replaceChild() method :-
// - This method will replace the original element with new created element.
// Syntax : .replaceChild(newElementToInsert, elementWhichNeedToReplace)
const ul2 = document.querySelector(".todo-list");
const li3 = document.createElement("li");
li3.textContent = "Used for replace method";
const referenceNode1 = document.querySelector(".first-todo");
// ul2.replaceChild(li3, referenceNode1);
// Output : The original element is replaced by new created element

// .remove() method :
// - .remove(elementToBeRemoved) method will remove the element from webpage
// ul2.removeChild(referenceNode1);
// Output : remove the element from Webpage
