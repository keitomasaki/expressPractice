const pool = require("../config/connection");

const dbConnect = async () => {
  await pool.getConnection();
};

module.exports = dbConnect;
