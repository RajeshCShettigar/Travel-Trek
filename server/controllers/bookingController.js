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

const getBooking=async(req,resp)=>{
    const id=req.params.id;
    try{
        const book=await booking.findById(id);
        resp.status(200)
        .json({
            success:true,
            message:"success",
            data:book,
        });
    }catch(err){
         resp.status(404).
         json({
            success:false,
            message:"failed to get booking",
            error:err
        });
    }
}

const getAllBooking=async(req,resp)=>{
    try{
        const books=await booking.find();
        resp.status(200).json({
            success:true,
            message:"success",
            data:books,
        });
    }catch(err){
        resp.status(500)
        .json({
            success:false,
            message:"failed to get booking",
        });
    }
}

module.exports={createBooking,getBooking,getAllBooking};
