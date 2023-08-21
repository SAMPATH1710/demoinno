const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/server.js" })
const databaseConnect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => console.log(`MongoDB is coonected with server:${data.connection.host}`)).catch(err => {
        console.log(err)
    })
}
module.exports = databaseConnect;