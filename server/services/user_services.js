const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserServices{

    //phuong thuc tao nguoi dung va luu vao db
    static async registerUser(email, password){
        try{
            const creatUser = new UserModel({ email, password});
            return await creatUser.save();
        }catch(err){
            throw err;
        }
    };

    //ham kiem tra email co ton taij
    static async checkuser(email){
        try{
            return await UserModel.findOne({email});
        }catch(error){
            throw error;
        }
    }

    // ham tao ma thong bao JWT , cac du lieu bao gom: du lieu ma thong bao JWT, khoa bi mat, thoi gian het hanj JWT
    static async generateToken(tokenData, secretKey, jwt_expore){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expore});
    }
} 

module.exports = UserServices;