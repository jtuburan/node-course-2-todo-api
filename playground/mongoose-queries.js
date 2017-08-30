const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59a3467990492e842c7d5489';
// if(!ObjectID.isValid(id)){
//     console.log('ID not Valid');
// }

// user.findById
User.findById(id).then((email) => {
    if(!email){
      return  console.logg('invalid email');
    }
    console.log('Todo find by Id',email);
}).catch((e) => done(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo find one',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('Todo find by Id',todo);
// }).catch((e) => console.log(e));
