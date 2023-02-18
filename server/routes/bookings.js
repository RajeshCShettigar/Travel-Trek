const express=require("express");
const {createBooking,getBooking,getAllBooking}=require("../controllers/bookingController");
const {verifyUser,verifyAdmin}=require("../utils/verifyAuth");
const router=express.Router();

router.post("/",verifyUser,createBooking);
router.get("/:id",verifyUser,getBooking);
router.get("/",verifyAdmin,getAllBooking);

module.exports=router;