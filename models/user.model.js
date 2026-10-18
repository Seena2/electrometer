import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [ true,"Provide user first name"],
        },
    email:{
        type:String,
        required: [ true,"Provide user email"],
        },
    dateOfBirth:{
        type:Date,
        required: [ true,"Provide user date of birth"],
        },
    gender:{
        type:String,
        required: [ true,"Provide gender"],
        },
    image:{
        type:String,
        required: false,
        },
},
{
    timestamp: true,
}
);

export const User = mongoose.model("User", UserSchema);
