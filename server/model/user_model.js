const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const db = require('../config/db');

const { Schema }  = mongoose;


const userSchema = new Schema({
    email:{
        type:String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    }
});

//tao ham ma hoa mat khau luu vao db
userSchema.pre('save', async function(){ 
    try{
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);

        user.password = hashpass;
        
    }catch(error){
        throw error;
    }
});

//tao ham so sanh kiem tra mat khau cos nhap dung khong

userSchema.methods.comparePassword = async function(userPasswork){
    try{
        const isMatch = await bcrypt.compare(userPasswork, this.password);
        return isMatch;
    }catch(error){
        throw error;
    }
}

const UserModel = db.model('user',userSchema);

module.exports = UserModel;