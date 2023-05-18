const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos'

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const list = document.createElement('li');
    const listToSpan = document.createElement('span');
    const listButton = document.createElement('button');
    listButton.innerText = '❌';
    listButton.addEventListener('click', deleteToDo)
    list.appendChild(listToSpan);
    list.appendChild(listButton);
    listToSpan.innerText = newTodo;
    todoList.appendChild(list);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = '';
    toDos.push(newToDo);
    paintToDo(newToDo);    
    saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);

function sayHello(){
    console.log('hello');
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHelo);
}