// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
   return console.log('unable to connect to mongodb server');
  } else {
    console.log('Connected to mongo server');
  }
  // delete many
//   db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
//   });

  // delete One
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //    console.log(result); 
    // });

  //findOneAndDeletemany
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });


  // challenge
    // db.collection('NewUser').deleteMany({name: 'Jason Tuburan'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('NewUser').findOneAndDelete({_id: new ObjectID('599d374654569b41a8bc3355')}).then((result)=>{
    //     console.log(result);
    // });


});