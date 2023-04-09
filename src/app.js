const express = require("express");
const cors = require("cors");
const dbConnect = require("./shared/dbConnection");

// エンドポイント定義
const TasksRouter = require("./tasks/TasksRouter");

// ミドルウェア
dbConnect();
const app = express();
app.use(cors());

// 使用するエンドポイント
app.use(TasksRouter);

module.exports = app;
