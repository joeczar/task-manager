// CRUD create read update delete
/*jshint esversion: 6 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('unable to connect');
  }
  
  const db = client.db(databaseName);
  
  db.collection('users').insertOne({
    name: 'Joe',
    age: 38
  });
});