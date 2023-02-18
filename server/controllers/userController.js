const User = require('../models/users');

const createUser = async (req, resp) => {
   
    try {
        const newUser = await new User(req.body);
        resp
            .status(200)
            .json({
                success: true,
                message: 'Successfully created',
                data: newUser
            });
    } catch (err) {
        resp
            .status(500)
            .json({
                success: false,
                message: 'Failed to create.Try again'
            });
    }
}

const updateUser = async (req, resp) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        resp
            .status(200)
            .json({
                success: true,
                message: 'successfully updated',
                data: updatedUser,
            });
    }
    catch (err) {
        resp
            .status(500)
            .json({
                success: false,
                message: 'Failed to update.Try again'
            });
    }
}

//delete users
const deleteUser = async (req, resp) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndDelete(id);
        resp
            .status(200)
            .json({
                success: true,
                message: 'successfully deleted',
                data: updatedUser,
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

//get single user
const getSingleUser = async (req, resp) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        resp
            .status(200)
            .json({
                success: true,
                message: 'Successfully retrieved',
                data: user
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

//getall users
const getAllUsers = async (req, resp) => {
    const page = parseInt(req.query.page);
    console.log(page);
    try {
        const users = await User.find({})
            .skip(page * 8)
            .limit(8);
        resp
            .status(200)
            .json({
                success: true,
                count: users.length,
                message: 'Successfully retrieved',
                data: users
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

module.exports = {createUser,updateUser,deleteUser,getSingleUser,getAllUsers};
