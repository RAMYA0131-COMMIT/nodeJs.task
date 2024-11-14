const cafeeDay = require("../models/TempleRunCafe.models");
const passwordGenerator = require("../utils/generatePassword")
const mailSend = require("../utils/sendEmail");
const bcrypt = require('bcrypt')
const {generateToken} = require("../middlewares/authToken");

const usercafeeDay= async (req,res) =>{
    try{
        let { email, Name} = req.body;
        const checkEmail = await cafeeDay.findOne({email});
        if (checkEmail){
            return res.status(409).json({Message: "Email Already Exists.."})
        }

     let password = passwordGenerator(8);
     let hashPassword = await bcrypt.hash(password,10);
        let data = {
            ...req.body,
            password:hashPassword,
            created: "success"
        }

        let Orderplace = await cafeeDay.create(data);
        await mailSend(email, Name, password);
        res.json({
            Orderplace,
            message: "Orderplace"
        });
    } catch (error){
        res.json({
            Error: error.message
        })
    }
};

const login =async(req,res)=>{
    try{
       let {email,password}=req.body;
       const checkEmail = await cafeeDay.findOne({email});
       if(!checkEmail) return res.status(404).json({message:"Invalid Email.."})
        const  checkPassword = await bcrypt.compare(password,checkEmail.password);
       if(!checkPassword) return res.status(404).json({message:"Invalid Password.."})
        let token = generateToken(checkEmail.userId);
        res.json({ checkEmail,token,message:"login successfull.."})
    }catch(err){
        res.json({err})
    }
};

module.exports={
    usercafeeDay,
    login
}