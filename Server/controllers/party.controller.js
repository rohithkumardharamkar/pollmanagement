const partymodel = require("../models/party.model");

let addparty=async(req,res)=>
{
    try
    {
        console.log(req.body);
        let data=await partymodel({...req.body});
        await data.save();
        res.status(201).json({"msg":"Party Added"})

    }
    catch(err)
    {
        console.log(err);
        res.json(err)
        
    }
}
let getall=async(req,res)=>
{
    try
    {
        let t=await partymodel.find({}).sort({"votes":-1})
        res.status(200).json(t)
    }
    catch(err)
    {
        console.log(err);
        
    }
}
let vote=async(req,res)=>
{
    console.log(req.body);
    
    try
    {
        let r=await partymodel.findByIdAndUpdate({"_id":req.body._id},{$inc:{"votes":1}})
     
        res.status(201).json({"msg":"voted"})
    }
    catch(err)
    {
        console.log(err);   
    }
}
let maxvotes=async(req,res)=>
{
    try
    {
        let r=await partymodel.aggregate([{$group:{"_id":null,"maxvotes":{"$max":"$votes"}}}]);
        res.status(200).json(r)

    }
    catch(err)
    {
        res.status(400).err({"msg":"All fiels are required"})
    }
}
module.exports={addparty,getall,vote,maxvotes}