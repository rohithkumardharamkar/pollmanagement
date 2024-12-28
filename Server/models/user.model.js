let mongoose=require("mongoose");
let userSh=new mongoose.Schema({
    "_id":Number,
    "email":String
})
let usermodel=mongoose.model("voters",userSh)
module.exports=usermodel;