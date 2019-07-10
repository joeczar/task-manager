/*jshint esversion: 6 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

// const me = new User({
//   name: "Joe",
//   age: 38
// });

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log( 'Error!', error);
// });

const task = mongoose.model('Task', {
  task: {
    type: String
  }, completed: {
    type: Boolean
  }
});

const dishwasher = new task({
  task: "Unload and load the dishwasher",
  completed: false
});

dishwasher.save().then(() => {
  console.log(dishwasher);
}).catch((error) => {
  console.log(error);
});