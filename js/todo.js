const todoForm = document.querySelector("#todo");
const todo = document.querySelector("#todo input");
const focus = document.querySelector("#focus");
const focusThing = document.querySelector("#focus span");
const button = document.querySelector("#focusBtn");

const TODO = "TODO";
const HIDDEN2 = "hidden";

function toDo() {
    event.preventDefault();
    const doThing = todo.value;
    localStorage.setItem(TODO, doThing);
    handleTodo();
}

function handleTodo() {
    const savedThing = localStorage.getItem(TODO);
    focusThing.innerHTML = savedThing;
    todoForm.classList.add(HIDDEN2);
    focus.classList.remove(HIDDEN2);
}

todoForm.addEventListener("submit", toDo);

const getThing = localStorage.getItem(TODO);

if (getThing === null) {
    focus.classList.add(HIDDEN2);
    todoForm.classList.remove(HIDDEN2);
} else {
    handleTodo();
}

function removeTodo() {
    localStorage.removeItem(TODO);
    focus.classList.add(HIDDEN2);
    todoForm.classList.remove(HIDDEN2);
    todo.value = "";
}

button.addEventListener("click", removeTodo);




