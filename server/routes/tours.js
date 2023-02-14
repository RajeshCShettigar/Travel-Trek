const express=require('express');
const {createTour,updateTour,deleteTour,getSingleTour,getAllTours,getTourBySearch,getFeaturedTours} = require('../controllers/tourController');

const router=express.Router();

//create new tour
router.post("/",createTour);

//update tour
router.post("/:id",updateTour);

//delete tour
router.delete("/:id",deleteTour);

//get single tour
router.get("/:id",getSingleTour);

//get all tours
router.get("/",getAllTours);

//get tours by city,maxdistance
router.get("/search/getTourBySearch",getTourBySearch);

//get featured tour
router.get("/search/getFeaturedTours",getFeaturedTours);

module.exports = router;