const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos'

let toDos = []; // 1 todo 배열은 시작할때마다 항상 비어있어 배열안이 덮어씌워지는 현상이 발생함
/* 상수에서 변수값으로 변경시켜 업데이트를 할 수 있도록 바꾼다. */

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const list = document.createElement('li');
    list.id = newTodo.id;
    const listToSpan = document.createElement('span');
    const listButton = document.createElement('button');
    listButton.innerText = '❌';
    listButton.addEventListener('click', deleteToDo)
    list.appendChild(listToSpan);
    list.appendChild(listButton);
    listToSpan.innerText = newTodo.text;
    todoList.appendChild(list);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = '';
    const newToDoObj = {
        id: Date.now(),
        text : newToDo, 
    }
    toDos.push(newToDoObj); // 1 그래서 계속 newtodo를 작성하고 form에 submit 할때 빈배열에 push를 하게 됨
    paintToDo(newToDoObj);    
    saveToDos();
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}