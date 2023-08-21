const app=require("./app");
const dotenv = require("dotenv");
const db=require("./config/dataBase")
//config
dotenv.config({ path: "backend/config/config.env" });
//connect Db
db()
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on http://localhost:${process.env.PORT}`)
})