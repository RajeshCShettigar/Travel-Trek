const express=require('express');
const createTour = require('../controllers/tourController');
const updateTour = require('../controllers/tourController');
const deleteTour = require('../controllers/tourController');
const getSingleTour=require('../controllers/tourController');
const getAllTour=require('../controllers/tourController');
const getToursBySearch=require('../controllers/tourController');

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
router.get("/",getAllTour);

//get tours by city,maxdistance
router.get("/search/getTourBySearch",getToursBySearch);

//get featured tour
router.get("/search/getFeaturedTours",getFeaturedTours);

export default router;