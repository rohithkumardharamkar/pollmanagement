let mongoose=require("mongoose")
let partSchema=new mongoose.Schema({
    "_id":{type:Number,required:true},
    "partyname":{type:String,required:true},
    "candidateName":{type:String,required:true},
    "symbol":String,
    "sname":String,
    "pic":String,
    "votes":{type:Number,default:0}
})
let partymodel=mongoose.model("parties",partSchema);
module.exports=partymodel