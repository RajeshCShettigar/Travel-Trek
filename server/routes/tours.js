const express=require('express');
const {getSingleTour,getAllTours,getTourBySearch} = require('../controllers/tourController');

const router=express.Router();

//get all tours
router.get("/getAllTours",getAllTours);

//get tours by city,maxdistance
router.get("/getTourBySearch",getTourBySearch);

//get single tour
router.get("/:id",getSingleTour);

module.exports = router;