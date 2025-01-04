let express=require("express");
let mongoose=require("mongoose");
let bodyParser=require('body-parser')
let app=express();
let cors=require('cors');
const partyrouter = require("./routes/party.route");
const userRoute = require("./routes/user.route");

mongoose.connect("mongodb://127.0.0.1:27017/Voter").then((el)=>
{
    console.log("Connected to the mongo database...................");
    
}).catch((el)=>
{
    console.log(el);
    
})
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/imgs", express.static("./imgs"));
app.use("/party",partyrouter);
app.use("/user",userRoute);
app.listen(5000)