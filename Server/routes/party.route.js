let express=require("express");
const {  addparty, getall } = require("../controllers/party.controller");
let partyrouter=new express.Router();
partyrouter.post("/addparty",addparty);
partyrouter.get("/getall",getall)
module.exports=partyrouter