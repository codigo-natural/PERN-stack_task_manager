export const getAllTasks = async (req, res) => {
  res.send("retrieving all tasks");
};

export const getTask = async (req, res) => {
  res.send("retrieving a single task");
};

export const createTask = async (req, res) => {
  res.send("creating a new task");
};

export const updateTask = async (req, res) => {
  res.send("updating a task");
};

export const deleteTask = async (req, res) => {
  res.send("deleting a task");
};
