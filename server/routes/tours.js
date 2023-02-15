const express=require('express');
const {createTour,updateTour,deleteTour,getSingleTour,getAllTours,getTourBySearch,getFeaturedTours,getTourCount} = require('../controllers/tourController');

const router=express.Router();
const {verifyAdmin}=require('../utils/verifyAuth');

//create new tour
router.post("/",verifyAdmin,createTour); 

//update tour
router.post("/:id",verifyAdmin,updateTour);

//delete tour
router.delete("/:id",verifyAdmin,deleteTour);

//get single tour
router.get("/:id",getSingleTour);

//get all tours
router.get("/",getAllTours);

//get tours by city,maxdistance
router.get("/search/getTourBySearch",getTourBySearch);

//get featured tour
router.get("/search/getFeaturedTours",getFeaturedTours);

//get tour count
router.get("/search/getTourCount",getTourCount);
module.exports = router;