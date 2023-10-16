const mongoose = require('mongoose');
const UserModel = require('./user_model')
const db = require('../config/db');

const { Schema }  = mongoose;

const todoSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    title:{
        type:String,
        required: true,
    },
    desc:{
        type:String,
        required: true,
    }
});

const ToDoModel = db.model('todo',todoSchema);

module.exports = ToDoModel;