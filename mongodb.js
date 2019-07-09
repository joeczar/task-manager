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

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: ObjectId("5d220fedd43d0c4a5080940d")
    //     },
    //     {
    //       $set: {
    //         name: "Dickhead"
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: ObjectId("5d220fedd43d0c4a5080940d")
    //     },
    //     {
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    db.collection("tasks")
      .updateMany(
        {
          completed: true
        },
        {
          $set: {
            completed: false
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
