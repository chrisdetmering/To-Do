document.getElementById('addToDo')
    .addEventListener('click', function () {
        const toDoContainer = document.getElementById('toDoContainer');
        const inputField = document.getElementById('inputField');
        const todo = createTodo(inputField.value)
        toDoContainer.appendChild(todo);
        inputField.value = "";
    })

function createTodo(text) {
    let todoParagraph = document.createElement('p');
    todoParagraph.classList.add('paragraph-styling');
    todoParagraph.innerText = text;
    todoParagraph = addToggleTodo(todoParagraph);
    todoParagraph = addDeleteTodo(todoParagraph);
    return todoParagraph;
}

function addToggleTodo(todo) {
    todo.addEventListener('click', function () {
        todo.classList.toggle("completed");
    })
    return todo;
}

function addDeleteTodo(todo) {
    todo.addEventListener('dblclick', function () {
        todo.remove();
    })
    return todo;
}