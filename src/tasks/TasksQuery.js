const queryBuilder = require("squel");

const getAll = async () => {
  return queryBuilder.select().from("Tasks").toParam();
};

module.exports = { getAll };
