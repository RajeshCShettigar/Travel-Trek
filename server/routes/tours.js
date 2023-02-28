const express=require('express');
const {getSingleTour,getAllTours,getTourBySearch} = require('../controllers/tourController');

const router=express.Router();

//get single tour
router.get("/:id",getSingleTour);

//get all tours
router.get('/getAllTours',getAllTours);

//get tours by city,maxdistance
router.get("/getTourBySearch",getTourBySearch);

module.exports = router;