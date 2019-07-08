// CRUD create read update delete
/*jshint esversion: 6 */
const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());



MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect');
  }
  
  const db = client.db(dbName);
  
  db.collection('users').insertOne({
    _id: id,
    name: 'Poncho',
    age: 99
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user.');
    }
    console.log(result.ops);   
  });
  
  // db.collection('users').insertMany([
  //   {
  //   name: 'Ronja',
  //   age: 27
  // },{
  //   name: 'Tal',
  //   age: 39
  // }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert users');
  //   }
  //   console.log(result.ops);
    
  // });

  // db.collection('tasks').insertMany([
  //   {
  //     task: "Call insurance",
  //     completed: false
  //   }, {
  //     task: "Blood test",
  //     completed: false
  //   }, {
  //     task: "Finish challenge",
  //     completed: true
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks');
  //   }
  //   console.log(result.ops);
    
  // });
});