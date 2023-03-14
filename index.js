let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const todoList = document.getElementById("todo-list");

  todoList.innerHTML = "";

  for (const todo of todos) {
    const listItem = document.createElement("li");

    listItem.textContent = todo.task;

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("checked");
    });

    todoList.appendChild(listItem);
  }
}

function addTodo(event) {
  event.preventDefault();
  const newTodoInput = document.getElementById("new-todo");
  const newTodoTask = newTodoInput.value;

    const newTodo = { id: Date.now(), task: newTodoTask };
    if (newTodoTask !== "") {
          todos.push(newTodo);
    }

    newTodoInput.value = "";
    
  renderTodos();

  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const addTodoButton = document.getElementById("add-todo");
addTodoButton.addEventListener("click", addTodo);

renderTodos();
