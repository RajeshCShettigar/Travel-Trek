const express=require("express");
const {createReview}=require("../controllers/reviewController");
const {verifyUser}=require("../utils/verifyAuth");
const router=express.Router();

router.post("/:tourid",verifyUser,createReview);

module.exports=router;