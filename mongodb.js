// CRUD create read update delete
/*jshint esversion: 6 */
const { MongoClient, ObjectId } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect');
  }
  
  const db = client.db(dbName);
  
  // db.collection('users').findOne({ _id: ObjectId('5d231dea9d067310f45e53b9') }, (error, user) => {
  //   if (error) {
  //     console.log('Unable to fetch user.');
  //   }
  //   console.log(user);
    
  // });

  // db.collection('users').find({ age: 38 }).toArray((error, results) => {
  //   console.log(results);
  // });
  // db.collection('users').find({ age: 38 }).count((error, count) => {
  //   console.log(count);
  // });

  db.collection('tasks').findOne({ _id: ObjectId('5d2213b5f164ce262470f922') }, (error, result) => {
    
    if(error) {
      console.log("That didn't work");
    }
    console.log(result);
  });

  db.collection('tasks').find({ completed: false }).toArray((error, results) => {
    console.log(results);
  });
});