const Tour = require('../models/toursModel');

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
        //console.log(err);
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

module.exports={getSingleTour,getAllTours,getTourBySearch};
