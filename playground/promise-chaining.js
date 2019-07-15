/*jshint esversion: 6 */
require('../src/db/mongoose');
const User = require('../src/models/User');

User.findByIdAndUpdate('5d25fce02302ae119c97cd24', { age: 1 }).then((user) => {
  console.log(user);
  return User.countDocuments({ age: 1 });
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});