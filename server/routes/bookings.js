const express=require("express");
const {createBooking}=require("../controllers/bookingController");
const {verifyUser}=require("../utils/verifyAuth");
const router=express.Router();

router.post("/",verifyUser,createBooking);


module.exports=router;