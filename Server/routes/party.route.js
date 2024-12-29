let express=require("express");
const {  addparty, getall, vote, maxvotes } = require("../controllers/party.controller");
let partyrouter=new express.Router();
partyrouter.post("/addparty",addparty);
partyrouter.get("/getall",getall);
partyrouter.post("/vote",vote)
partyrouter.get("/max",maxvotes);
module.exports=partyrouter