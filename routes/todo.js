const library = [];

function task(description) {
  this.description = description;
}

const getTask = (app) => {
  app.get("/add/:newTask", (req, res) => {
    const newTask = req.params.newTask;

    library.push(newTask);

    const newTaskIndex = library.indexOf(newTask);

    res.cookie(newTaskIndex, newTask);

    res.json({
      newTaskIndex,
      newTask,
    });
  });
};

const rmTask = (app) => {
  app.get("/rm/:index", (req, res) => {
    const index = req.params.index;
    library.splice(index, 1);

    res.clearCookie(index);

    res.json();
  });
};

const updateTask = (app) => {
  app.get("/update", (req, res) => {
    const cookies = req.cookies;
    res.json(cookies);
  });
};

export { getTask, rmTask, updateTask };
