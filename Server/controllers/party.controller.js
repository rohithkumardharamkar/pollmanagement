const partymodel = require("../models/party.model");
let multer=require("multer");
let bodyParser=require("body-parser")
let storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'./imgs')
    },
    filename:function(req,file,cb)
    {
        let us=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+us+'.'+file.mimetype.split("/")[1])
    }

})
const upload=multer({storage:storage})
let deleteall=async(req,res)=>
{
    try
    {
        await partymodel.deleteMany({})
        res.json({"msg":"Details deleted"})
    }
    catch(err)
    {
        console.log(err);
        

    }
}
let addparty=async(req,res)=>
{
    try
    {
        let data=await partymodel({...req.body,"symbol":req.file.filename});
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
module.exports={addparty,getall,vote,maxvotes,upload,deleteall}