const tour=require("../models/tours");
const review=require("../models/reviews");

const createReview=async(req,resp)=>{
    const tourId=req.params.tourId;
    const newReview=new review({...req.body});
    try{
        const savedReview=await newReview.save();
        await tour.findByIdAndUpdate(tourId,
            {$push:{reviews:savedReview._id}
        });
        resp.status(200).
        json({success:true,message:"Review submitted",data:savedReview});
    }catch(err){
        resp.status(500).
        json({success:false,message:"failed to submit review",error:err});
    }
};

module.exports={createReview};