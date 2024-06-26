let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click', () => {
    addTodoItem();
});

input.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        addTodoItem();
    }
});

function addTodoItem() {
    let todoText = input.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
        addtodo(todoText);
        input.value = '';
    }
}

function addtodo(todo) {
    let para = document.createElement('p')
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick', () => {
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo) {
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}