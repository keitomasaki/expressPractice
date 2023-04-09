const TasksQuery = require("./TasksQuery");
const pool = require("../config/connection");

const getTasks = async () => {
  const query = await TasksQuery.getAll();
  const [row] = await pool.query(query.text, query.values);
  return row;
};

module.exports = { getTasks };
