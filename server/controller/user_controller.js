const UserServices = require("../services/user_services");


//xuat ham tao dang ky nguoi dung
exports.register = async (req,res,next)=>{
    try{
        // lay email va password tu giao dien nguoi dung
        const {email, password} = req.body;

        //truyen email va password vao ham tao nguoi dung va tra lai thanh cong
        const successRes = await UserServices.registerUser(email, password);

        //tra ket qua thanh cong va thong bao 
        res.json({status: true, success:"User Registered Successfully"});
    }catch(error){
        throw error;
    }
}

//xuat ham dang nhap nguoi dung
exports.login = async (req,res,next)=>{
    try{
        // lay email va password tu giao dien nguoi dung
        const {email, password} = req.body;

        const user = await UserServices.checkuser(email);

        if(!user){
            throw new Error("User dont exist");
        }

        const isMatch = await user.comparePassword(password);

        if(isMatch === false){
            throw new Error("Password invalid");
        }

        // luu tru thong tin dang nhap nguoi dung
        let tokenData = {_id:user._id, email:user.email};

        const token = await UserServices.generateToken(tokenData, "secretKey", "1h");

        // phan hoi 
        res.status(200).json({status:true, token:token});
       
    }catch(error){
        throw error;
    }
}