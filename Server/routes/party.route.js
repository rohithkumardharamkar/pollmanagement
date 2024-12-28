let express=require("express");
const {  addparty, getall, vote } = require("../controllers/party.controller");
let partyrouter=new express.Router();
partyrouter.post("/addparty",addparty);
partyrouter.get("/getall",getall);
partyrouter.post("/vote",vote)
module.exports=partyrouter