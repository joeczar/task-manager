// CRUD create read update delete
/*jshint esversion: 6 */
const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect");
    }

    const db = client.db(dbName);

    db.collection('users').deleteOne({
      age: 99
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
);
