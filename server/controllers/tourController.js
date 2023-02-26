const Tour = require('../models/toursModel');

//create tours
const createTour = async (req, resp) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save(req.body);
        resp
            .status(200)
            .json({
                success: true,
                count:tours.length,
                message: 'Successfully created',
                data: savedTour
            });
    } catch (err) {
        console.log(err);
        resp
            .status(500)
            .json({
                success: false,
                message: 'Failed to create.Try again',
                error: err
            });
    }
}

//delete tours
const deleteTour = async (req, resp) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndDelete(id);
        resp
            .status(200)
            .json({
                success: true,
                message: 'successfully deleted',
                data: updatedTour,
            });
    }
    catch (err) {
        resp
            .status(500)
            .json({
                success: false,
                message: 'Failed to delete.Try again'
            });
    }
}

//get single tour
const getSingleTour = async (req, resp) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);
        resp
            .status(200)
            .json({
                success: true,
                message: 'Successfully retrieved',
                data: tour
            });
    }
    catch (err) {
        resp
            .status(404)
            .json({
                success: false,
                message: 'Not found'
            });
    }
}

//getall tours
const getAllTours = async (req, resp) => {
    try {
        const tours = await Tour.find();
        resp
            .status(200)
            .json({
                success: true,
                count: tours.length,
                message: 'Successfully retrieved',
                data: tours
            });
    }
    catch (err) {
        resp
            .status(404)
            .json({
                success: false,
                message: 'Not found'
            });
    }
}

//search tour by city,distance,maxgroup size
const getTourBySearch = async (req, resp) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    console.log(city, distance, maxGroupSize);
    try {
        const tours = await Tour.find({
            "city":city,
            "distance": { $gte: distance },
            "maxGroupSize": { $gte: maxGroupSize }
        });
        resp
            .status(200)
            .json({
                success: true,
                count: tours.length,
                message: 'Successfully retrieved',
                data: tours
            });
    }
    catch (err) {
        
        resp
            .status(404)
            .json({
                success: false,
                message: 'Not found'
            });
    }
}

const getFeaturedTours=async(req,resp)=>{
    try {
        const tours = await Tour.find({
            "featured":true
        });
        resp
            .status(200)
            .json({
                success: true,
                count: tours.length,
                message: 'Successfully retrieved',
                data: tours
            });
    }
    catch (err) {
        resp
            .status(404)
            .json({
                success: false,
                message: 'Not found'
            });
    }
}

module.exports={createTour,deleteTour,getSingleTour,getAllTours,getTourBySearch,getFeaturedTours};
