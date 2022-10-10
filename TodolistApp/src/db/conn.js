const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/todolist")
.then(()=>{console.log("Connection Successfull")})
.catch(()=>{console.log("No Connection")})