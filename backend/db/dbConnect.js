const mongoose = require("mongoose");
// import mongoose from "mongoose"
require("dotenv").config();
//DB_URL=mongodb+srv://quyenhgaz:123456az@cluster0.4zbrgd8.mongodb.net/photoapp?retryWrites=true&w=majority&appName=Cluster0
// JWT_SECRET=final_project
// NODE_ENV=development
async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
