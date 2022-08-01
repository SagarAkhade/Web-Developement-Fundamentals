// Create Todo List 
// Properties and Applications used
// "submit" event will fired when we click or enter in form submit button 
// .preventDefault() method -> will prevent the webpage from refresh when we hit enter or click submit button
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();    
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
            <span class="text">${newTodoText}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"; 
    }
})
