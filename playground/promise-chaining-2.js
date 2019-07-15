/*jshint esversion: 6 */
require('../src/db/mongoose');
const Task = require('../src/models/Task');

Task.findByIdAndDelete('5d29f64a303ffd39f40db1a0').then((task) => {
  console.log(task);
  return Task.find({ completed: false });
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});