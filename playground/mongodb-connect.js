// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
   return console.log('unable to connect to mongodb server');
  } else {
    console.log('Connected to mongo server');
  }

  // db.collection('NewUser').insertOne({
  //   name: 'Dolph',
  //   age: 26,
  //   location: 'sabang'
  // },(err,result) => {
  //   if(err){
  //     return console.log('unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });

  db.close();
});