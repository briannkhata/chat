//import http from "http";
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const db = require("../config/dbConnection.js");

const indexRouter = require("../routes/index.js");
const userRouter = require("../routes/user.js");
const chatRoomRouter = require("../routes/chatRoom.js");
const deleteRouter = require("../routes/delete.js");

const { decode } = require("../middlewares/jwt.js");

const app = express();

const port = process.env.PORT || 3000;
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);

app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

//const server = http.createServer(app);
//server.listen(port);
app.listen(port, (req, res) => {
  console.log(`Listening on port:: http://localhost:${port}/`);
});
