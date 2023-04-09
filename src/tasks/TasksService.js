const TasksRepository = require("./TasksRepository");

const getTasks = async () => {
  const taskList = await TasksRepository.getTasks();
  return taskList;
};

module.exports = { getTasks };
