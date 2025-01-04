const usermodel = require("../models/user.model");
let nodemailer=require("nodemailer");
let check=async(req,res)=>
{
    try
    {
        
        let r=await usermodel.findById({"_id":req.body._id});
        
        if(r==null)
        {
           
            let r=await usermodel({...req.body});
            await r.save();
            res.json({"msg":"voted"})
            
            
        }
        else
        {
            res.status(400).json({"msg":"You have already voted"});
            
        }
    }
    catch(err)
    {

    }
}
let getotp=async(req,res)=>
{
  try
  {
    let otp=Math.floor(Math.random()*(5000-1000)+1000);
    console.log(otp);
    let transpoter=nodemailer.createTransport({
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth: { 
            user: 'rk8514269@gmail.com',
            pass: 'swwffrrdebimsozp'
        }
    })
    function send(to,sub,msg)
    {
        transpoter.sendMail({
            to:to,
            subject:sub,
            html:msg
        })
    }
    send(req.body.email,"Voter OTP",`Your OTP is ${otp} please verify your OTP and cast your vote `);
    console.log("otp sent successfully");
    
    res.json({"OTP":otp})
  }
  catch(err)
  {
    console.log(err);
    
  }
    
}
module.exports={check,getotp}