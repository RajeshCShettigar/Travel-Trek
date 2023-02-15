const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Mongodb connection established");
    }catch(err){
         console.log("Mongodb connection error :"+err);
    }
};
connect();
module.exports=connect;