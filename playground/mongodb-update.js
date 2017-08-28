// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
   return console.log('unable to connect to mongodb server');
  } else {
    console.log('Connected to mongo server');
  }

//   db.collection('Todos').findOneAndUpdate({
//       _id: new ObjectID('599d316454569b41a8bc314d')
//   },{
//       $set: {
//         completed : true
//       }
//   }, {
//       returnOriginal: false
//   }).then((result) => {
//       console.log(result);
//   });
    db.collection('NewUser').findOneAndUpdate({
        _id: new ObjectID("59a107ae8aff8b20b8c9d637")
    }, {
        $set: {
            name: "Jason",
        },
        $inc: {
            age : 1
        }
    });
});