const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please Enter The Name Of The User"]
        
    },
    email: {
        type: String,
        reuire: [true, "Please Enter The E-mail"]
    }
})
module.exports = mongoose.model("User", userSchema);;