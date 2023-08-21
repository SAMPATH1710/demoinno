const express = require("express");
const { getAllUsers, registerUser, getUserDetails } = require("../controllers/userController");

const router = express.Router();

router.route("/users").get(getAllUsers)
router.route("/user/register").post(registerUser)
router.route("/user/:id").get(getUserDetails)
    .get(getUserDetails)
module.exports=router