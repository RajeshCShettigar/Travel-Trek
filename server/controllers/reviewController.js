const tour=require("../models/toursModel");
const review=require("../models/reviewsModel");

const createReview=async(req,resp)=>{
    const tourId=req.params.tourid;
    const {username,reviewText,rating}=req.body;
    //const newReview=new review({...req.body});
    //console.log(req.body);
    try{
        const newReview = new review({
            productId: tourId,
            username: username,
            reviewText: reviewText,
            rating: rating,
          });
        const savedReview=await newReview.save();
        await tour.findByIdAndUpdate(tourId,
            {$push:{reviews:savedReview.productId}
        });
        resp.status(200).
        json({success:true,message:"Review submitted",data:savedReview});
    }catch(err){
        resp.status(500).
        json({success:false,message:"failed to submit review",error:err});
    }
};

const getReviews=async(req,resp)=>{
    const tourId=req.params.tourid;
    //console.log(tourId);
    try{
        const tourreviews=await review.find({productId:tourId});
        //console.log("reviews",tourreviews);
        resp.status(200).
        json({success:true,message:"Reviews fetched",data:tourreviews});
    }catch(err){
        resp.status(500).
        json({success:false,message:"failed to get reviews",error:err});
        console.log(err);
    }
}

module.exports={createReview,getReviews};