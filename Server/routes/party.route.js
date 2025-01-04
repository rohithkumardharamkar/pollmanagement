let express=require("express");
const {  addparty, getall, vote, maxvotes, upload, deleteall } = require("../controllers/party.controller");
let partyrouter=new express.Router();
partyrouter.post("/addparty",upload.single("symbol") ,addparty);
partyrouter.get("/getall",getall);
partyrouter.post("/vote",vote)
partyrouter.get("/max",maxvotes);
partyrouter.delete("/del",deleteall);
module.exports=partyrouter;