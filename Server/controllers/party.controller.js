const partymodel = require("../models/party.model");

let addparty=async(req,res)=>
{
    try
    {
        console.log(req.body);
        let data=await partymodel({...req.body});
        await data.save();
        res.json({"msg":"Party Added"})

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
        let t=await partymodel.find({})
        res.json(t)
    }
    catch(err)
    {
        console.log(err);
        
    }
}
module.exports={addparty,getall}