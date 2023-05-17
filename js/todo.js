const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

function paintToDo(newTodo) {
    const list = document.createElement('li');
    const listToSpan = document.createElement('span');
    list.appendChild(listToSpan);
    listToSpan.innerText = newTodo;
    todoList.appendChild(list);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = '';
    paintToDo(newToDo);    
}

todoForm.addEventListener('submit', handleToDoSubmit);