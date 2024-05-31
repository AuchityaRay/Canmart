const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const path = require('path');
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");

//ROUTES
const userRoutes = require('./route/User/userRoute');
const categoryRoutes = require('./route/Category/categoryRoute');
const productRoutes = require('./route/Product/productRoute');
const enquiryRoutes = require('./route/Enquiry/enquiryRoute');
const initialDataRoutes = require('./route/initialData');
const sellersListRoutes = require('./route/sellerList');
const searchRoutes = require('./route/searchRoute');
const otpRoutes = require('./route/User/otproute');

//dotenv
dotenv.config();
const app = express();
dbConnect();

//-------------
//Middleware
//--------------
app.use(express.json());

//cors
app.use(cors());

//Users route
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",enquiryRoutes);
app.use("/api",initialDataRoutes);
app.use("/api",sellersListRoutes);
app.use("/api",searchRoutes);
app.use("/api",otpRoutes);

module.exports = app;
