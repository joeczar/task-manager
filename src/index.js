/*jshint esversion: 8 */
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//  if (req.method === 'GET') {
//    res.send('GET requests are disabled');
//  } else {
//    next();
//  }
// });

app.use((req, res, next) => {
  res.status(503).send('Site down due to maintenence');
 });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
