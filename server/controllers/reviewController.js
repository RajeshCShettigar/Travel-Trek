const tour=require("../models/toursModel");
const review=require("../models/reviewsModel");

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

const getReviews=async(req,resp)=>{
    const tourId=req.params.id;
    try{
        const tourreviews=await review.find(tourId);
        console.log("reviews",tourreviews);
        resp.status(200).
        json({success:true,message:"Reviews fetched",data:tourreviews});
    }catch(err){
        resp.status(500).
        json({success:false,message:"failed to get reviews",error:err});
    }

}
module.exports={createReview,getReviews};