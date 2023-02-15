const express=require('express');
const {createUser,updateUser,deleteUser,getSingleUser,getAllUsers} = require('../controllers/userController');
const {verifyUser,verifyAdmin}=require('../utils/verifyAuth');


const router=express.Router();

router.post("/",createUser);

router.put("/:id",verifyUser,updateUser);

router.delete("/:id",verifyUser,deleteUser);

router.get("/:id",verifyUser,getSingleUser);

router.get("/:id",verifyUser,verifyAdmin,getAllUsers);

module.exports = router;