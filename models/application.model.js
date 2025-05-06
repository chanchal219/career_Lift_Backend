import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,//konsi job ke lie kiya hai
       ref:'Job',
       required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId, //kis bnde ki application hai
        ref:'user',
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true})

export const Application = mongoose.model("Application",applicationSchema);