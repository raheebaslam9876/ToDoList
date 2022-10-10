const mongoose=require("mongoose")

const todolistSchema=new mongoose.Schema({
    discription:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const TodolistApp=new mongoose.model("TodolistApp",todolistSchema);
module.exports=TodolistApp;