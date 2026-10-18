import express from 'express';
import {getAllUsers} from 'user.controller.js';


const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const users = await User.find({});
       res.status(200).json(users);
        
    } catch(err){
        console.error(err);
        res.status(500).json({message:"Internal server error", err});
    }
});