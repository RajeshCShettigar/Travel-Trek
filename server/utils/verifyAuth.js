const jwt=require("jsonwebtoken");

const verifyToken=(req,resp,next)=>{
    const token=req.cookies.accessToken;
    if(!token){
        return resp.status(403).json({success:false,message:"Access denied"});
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return resp.status(401)
            .json({success:false,message:"Unauthorized"});
        }
        req.user=user;
        next();
    });
};

const verifyUser=(req,resp,next)=>{
    verifyToken(req,resp,next,()=>{
        if(req.user.id===req.params.id||req.user.role=="admin"){
            next();
        }else{
         return resp.status(401)
         .json({success:false,message:"Unauthorized"});
        }
    });
};

const verifyAdmin=(req,resp,next)=>{
    verifyToken(req,resp,next,()=>{
      if(req.user.id===req.params.id || req.user.role==="admin"){
        next();
    }else{
       return resp.status(401)
        .json({success:false,message:"Unauthorized"});
    }
    });
};

module.exports={verifyToken,verifyUser,verifyAdmin};