const form = document.querySelector(".todo-form");
const taskInput = document.querySelector("#task-input");
const todoLibrary = document.querySelector(".todo-library");

const updateTask = () => {
  fetch("/update")
    .then((response) => response.json())
    .then((data) => {
      updateTaskToView(data);
    });
};

updateTask();

const updateTaskToView = (data) => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      addTaskToView(key, data[key]);
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskDescription = taskInput.value;

  fetch(`/add/${taskDescription}`)
    .then((response) => response.json())
    .then((data) => {
      addTaskToView(data.newTaskIndex, data.newTask);
      console.log(data.newTaskIndex);
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

  btnElement.addEventListener("click", () => {
    const index = divElement.dataset.index;

    divElement.remove();

    fetch(`/rm/${index}`);
  });
};
