const mongoose = require('mongoose')
const Mongo_URI = "mongodb://localhost:27017/mydatabase";

const connectDB = async ()=>{
    try{
        await mongoose.connect(Mongo_URI);
        console.log("Connect Successfully");
    }
    catch(error){
        console.log("MongoDb connection failed", error.message);
        process.exit(0);
    }
};
module.exports = connectDB;



























// const mongoose  = require("mongoose");
// const MONGO_URI = "mongodb://localhost:27017/mydatabase";
// const connectDB = async () => {
//     try{
//         await mongoose.connect(MONGO_URI);
//         console.log("MongoDB connected successfully");
//     }catch(error){
//         console.log("MongoDB connection failed",error.message);
//         process.exit(1);   
//     }
// };
// module.exports = connectDB;
