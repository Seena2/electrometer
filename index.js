import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './db.js';
import {User} from   "./models/user.model.js";
import dns from "node:dns/promises"; // or `const dns = require("node:dns");` for CommonJS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT= process.env.PORT || 5050;

/// Execute the database connection
connectDB();

// Initialize express app
const app = express();


// MIDDLEWARES
app.use(express.json()); //parses JSON requests
app.use(cors());

// API ENDPOINTS
app.get('/',(req,res)=>{
    res.send('Welcome, ');
})
app.post('/api/users', async (req,res)=>{
    try{
        const user = await User.create(req.body);
       res.status(200).json(user);
        
    } catch(err){
        console.error(err);
        res.status(500).json({message:"Internal server error", err});
    }
});

// Start the server on specific port to listen for requests
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT} ...`);
})