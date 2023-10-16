const ToDoServices = require('../services/todo_services')

exports.creatTodo = async (req, res, next)=>{
    try{
        //lay du lieu tu giao dien
        const {userId, title, desc} = req.body;

        // tao va luu tru du lieu todo
        let todo = await ToDoServices.creatTodo(userId,title,desc);

        //tra ket qua hien thi tren giao dien, truyen du lieu duoc luu tru trong db
        res.json({status:true, success:todo});
    }catch(error){
        next(error);
    }
}