const User=require("../models/userModel")


//get All Users
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    const userCount = await User.countDocuments();
    res.status(200).json({
        "userCount":userCount,
        users
    })
}

/* Register or Create a User */

exports.registerUser = async (req, res)=>{
    const { name, email } = req.body;
    const user = await User.create({
    name,email
    })
    res.status(200).json({
        user,
        message: "User Created Succes",
        
    })
}

// Get User Detail
exports.getUserDetails = async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    res.status(200).json({
      success: true,
      user,
    });
};
  
