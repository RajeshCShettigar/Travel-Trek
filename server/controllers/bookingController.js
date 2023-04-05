const booking=require('../models/bookingsModel');

const createBooking=async(req,resp)=>{
    const newBooking=new booking(req.body);
     try{
        const saveBooking=await newBooking.save();
        resp.status(200)
        .json({success:true,message:"Booking created",data:saveBooking});
     }catch(err){
        resp.status(500)
        .json({success:false,message:"Failed to create booking",error:err});
     }
};

module.exports={createBooking};
