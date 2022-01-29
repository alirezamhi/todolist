const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const todoList = document.querySelector('.todolist');
const textError = document.querySelector('.error');

todoButton.addEventListener('click' , addTodo);

function addTodo(event){
    event.preventDefault();
    if(todoInput.value === ''){
       textError.innerHTML = '<p class = red>please add text</p>';
    }else{
        textError.innerHTML = '';
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todoDiv");

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value ; 

        
        todoDiv.appendChild(newTodo);
        todoInput.value = "" ;
        // add checked button
        const completeButton = document.createElement('button');
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
        saveLocalTodo(todoInput.value);
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
