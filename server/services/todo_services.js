const ToDoModel = require('../model/todo_model')

class ToDoServices{

    // ham tao viec can lam
    static async creatTodo(userId, title, desc){
        //tao doi tuong 
        const creatTodo  = new ToDoModel({userId, title,desc});
        return await creatTodo.save();

    }
}

module.exports = ToDoServices;