const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const todoList = document.querySelector('.todolist');
const textError = document.querySelector('.error');

todoButton.addEventListener('click' , addTodo);

function addTodo(event){
    event.preventDefault();
    if(todoInput.value === ''){
        textError.innerHTML = '<p class = red>please write text</p>';
    }else{
        textError.innerHTML = '';
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todoDiv");
        
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value ; 
        saveLocalTodo(todoInput.value);

        
        todoDiv.appendChild(newTodo);
        todoInput.value = "" ;
        // add checked button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "<i class='fas fa-check-square'></i>";
        completeButton.classList.add("checked")
        todoDiv.appendChild(completeButton);
        // add trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = "<i class='fas fa-trash'></i>";
        trashButton.classList.add("trash")
        todoDiv.appendChild(trashButton);
        // add to list
        todoList.appendChild(todoDiv);
    }    
}

function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

todoList.addEventListener("click" , deletecheckedtodo);
function deletecheckedtodo(event){
    const todoItem = event.target;
    
    if (todoItem.classList[0] === "checked"){
        const todoAll = todoItem.parentElement;
        todoAll.classList.toggle("completed");
    }else if(todoItem.classList[0] === "trash"){
        const todoAll = todoItem.parentElement;
        removeLocalstorage(todoAll)
        todoAll.remove();
    }
}

function removeLocalstorage(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos")) ;
    }
    const todoDelete = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoDelete) , 1);
    localStorage.setItem("todos" , JSON.stringify(todos));
}