/*jshint esversion: 8 */
require('../src/db/mongoose');
const Task = require('../src/models/Task');

// Task.findByIdAndDelete('5d29f64a303ffd39f40db1a0').then((task) => {
//   console.log(task);
//   return Task.find({ completed: false });
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5d2b1e9ce10ec91c9cc485ca').then((count) => {
  console.log('count', count);
}).catch((e) => {
  console.log(e);
});