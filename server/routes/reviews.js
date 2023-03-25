const express=require("express");
const {createReview,getReviews}=require("../controllers/reviewController");
//const {verifyUser}=require("../utils/verifyAuth");
const router=express.Router();

router.get('/:tourid',getReviews);

router.post("/:tourid",createReview);

module.exports=router;