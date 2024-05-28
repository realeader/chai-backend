import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log(`Connecting to MongoDB with connection string: ${connectionString}`);  // Log the connection string

        // Attempt to connect
        const connectionInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;  // Ensure this is the default export


















// import mongoose from "mongoose"

// import { DB_NAME } from "../constants.js";


// const connectDB= async () => {
//     try {
//        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

       

//     } catch (error) {
//         console.log("MONGODB connection error ", error);
//        process.exit(1)
//     }
// }

// export default connectDB



