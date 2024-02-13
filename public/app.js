const form = document.querySelector(".todo-form");
const taskInput = document.querySelector("#task-input");
const todoLibrary = document.querySelector(".todo-library");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskDescription = taskInput.value;

  fetch(`/${taskDescription}`)
    .then((response) => response.json())
    .then((data) => {
      addTaskToView(data.newTaskIndex, data.newTask);
    });

  taskInput.value = "";
});

const addTaskToView = (taskIndex, task) => {
  const divElement = document.createElement("div");
  const pElement = document.createElement("p");
  const btnElement = document.createElement("button");

  pElement.textContent = task;
  divElement.appendChild(pElement);

  btnElement.textContent = "X";
  divElement.appendChild(btnElement);

  divElement.setAttribute("data-index", taskIndex);
  todoLibrary.appendChild(divElement);
};
