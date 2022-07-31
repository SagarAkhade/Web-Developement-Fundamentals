// Static list vs Live list in JavaScript 

// static list vs live list ->>>
// Static list ->
// static list - it is noraml list but when we added new listItem to it thro" JS 
// it will not add them in initial list
// querySelectorAll - will gives us static list 
// Static list is in form of node list 
const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);
// Output : NodeList(5) [li, li, li, li, li] - NodeList of all 5 li printed

// Live list ->
// Live list - it is noraml list but when we added new listItem to it thro" JS 
// it will add them in initial list dynamically
// getElementsByTagName/className/id - will gives us live list 
// Live list is in form of HTMLCollection
const ul1 = document.querySelector(".todo-list");
const listItems1 = ul1.getElementsByTagName("li");
const seventhLi = document.createElement("li");
seventhLi.textContent = "item 7";
ul1.append(seventhLi);
console.log(listItems1);
// Output : HTMLCollection(7) [li, li, li, li, li, li, li] : All list items gets printed dynamically


// Get dimension of element ->>>
// - .getBoundingClientRect() method : will give all dimensions of selected element in pixels
// .getBoundingClientRect().height method : will give the height of selected element
// .getBoundingClientRect().width method : will give the width of selected element
// - And similarly there is top, bottom, left, right property
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
// Output : all dimensions of selected element are printed as below 
// DOMRect {x: 37.90178680419922, y: -52.00893020629883, 
// width: 682.27685546875, height: 552.3214721679688, top: -52.00893020629883, …}
const height = sectionTodo.getBoundingClientRect().height;
console.log(height);
// Output : height of selected element printed
