import 'dotenv/config';
import mongoose from 'mongoose'; // ES6 Import syntax

const ATLAS_URI = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    // Replace with your MongoDB Atlas or local connection string
    // const conn = await mongoose.connect('mongodb://127.0.0.1:27017/myapp');//local
    const conn = await mongoose.connect(ATLAS_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB; // ES6 Export syntax