const express=require("express");
const {createBooking,getBooking}=require("../controllers/bookingController");
const {verifyUser}=require("../utils/verifyAuth");
const router=express.Router();

router.post("/",verifyUser,createBooking);
router.get("/:id",verifyUser,getBooking);

module.exports=router;