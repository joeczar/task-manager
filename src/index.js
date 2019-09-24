/*jshint esversion: 8 */
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById('5d8a12262cf688150013c7c8');
  // await task.populate('owner').execPopulate();
  // console.log(task);
  
  const user = await User.findById('5d89ffece54eaa472078a08e');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
  
};

main();