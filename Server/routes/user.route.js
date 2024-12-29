let express=require("express");
const { check, getotp } = require("../controllers/user.controller");
let userRoute=new express.Router();
userRoute.post("/check",check);
userRoute.post("/getotp",getotp)
module.exports=userRoute;