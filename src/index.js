//require('dotenv').config();

import dotenv from "dotenv"


import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})

connectDB()

.then(()=>
app.listen(process.env.PORT || 8000 , ()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
})

.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})














// import dotenv from 'dotenv';
// import connectDB from './db/index.js';

// dotenv.config({
//     path: './.env'  // Ensure the correct path to your .env file
// });

// connectDB();


