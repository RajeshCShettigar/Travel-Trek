const express=require('express');
const {getSingleTour,getAllTours,getTourBySearch,getFeaturedTours} = require('../controllers/tourController');

const router=express.Router();

//get single tour
router.get("/search/:id",getSingleTour);

//get all tours
router.get("/search/getAllTours",getAllTours);

//get tours by city,maxdistance
router.get("/search/getTourBySearch",getTourBySearch);

//get featured tour
router.get("/search/getFeaturedTours",getFeaturedTours);

module.exports = router;