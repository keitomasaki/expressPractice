const express = require("express");
const router = express.Router();
const tasksService = require("./TasksService");

router.get("/api/v1/task", async (req, res, next) => {
  try {
    const taskList = await tasksService.getTasks();
    console.log("taskList", taskList);
    res.send("hello task");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
