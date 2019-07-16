/*jshint esversion: 8 */
require('../src/db/mongoose');
const User = require('../src/models/User');

// User.findByIdAndUpdate('5d25fce02302ae119c97cd24', { age: 1 }).then((user) => {
//   console.log(user);
//   return User.countDocuments({ age: 1 });
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5d25fce02302ae119c97cd24', 2).then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});