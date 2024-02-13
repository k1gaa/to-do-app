import cookieParser from "cookie-parser";

const library = [];

function task(description) {
  this.description = description;
}

const getTask = (app) => {
  app.get("/:newTask", (req, res) => {
    const newTask = req.params.newTask;

    addTask(newTask);

    const newTaskIndex = library.indexOf(newTask);

    res.cookie(newTaskIndex, newTask);

    res.json({
      newTaskIndex,
      newTask,
    });
  });
};

const addTask = (newTask) => {
  library.push(newTask);
};

export { getTask };
