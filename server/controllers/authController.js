const User=require('../models/usersModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const register=async(req,resp)=>{
    try{
       const salt=bcrypt.genSaltSync(10);
       const hash=bcrypt.hashSync(req.body.password,salt); 
       const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        photo:req.body.photo
      });
      await newUser.save();

     resp.status(200)
      .json({success:true,message:"User registered successfully",user:newUser});
    }catch(err){
     resp.status(500)
      .json({success:false,message:"Error occured while registering user",error:err});
    }
};

const login=async(req,resp)=>{
    const email=req.body.email;
    try{ 
     const user=await User.findOne({email});
     if(!user){
     resp.status(404)
       .json({success:false,message:"User not found"});
       return;
     }
     const checkPassword=await bcrypt.compare(req.body.password,user.password);
     if(!checkPassword){
       resp.status(401)
       .json({success:false,message:"Incorrect email or password"});
       return;
     }
     const {password,role,...rest}=user._doc;
     const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:"1d"});

     resp.cookie('accessToken',token,{
        httpOnly:true,
        expires:token.expiresIn
     }).status(200)
     .json({token,success:true,message:"User logged in successfully",data:{...rest},role});
     return;
    }catch(err){
    resp.status(500)
      .json({success:false,message:"Failed to login",error:err});
      return;
    }
};

module.exports={register,login};