import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard()
{
    let [data,setData]=useState([]);
    let [b,setB]=useState(0);
    let [max,setMax]=useState(0);

    function fun()
    {
        setB(b+1)
    }
    useEffect(()=>
    {
        axios.get("http://localhost:5000/party/getall").then((el)=>{
            setData(el.data)
        })
        axios.get("http://localhost:5000/party/max").then((el)=>{
           console.log(el);
           
           setMax(el.data[0].maxvotes)
        })

    },[b])
    console.log(max);
    
    
    return(<div className="evm">
        <button onClick={fun}>Refresh</button>
        <table border={1}>
            <tr>
                <th>Serial No.</th>
                <th>Party Name</th>
                <th>Candidate Name</th>
                <th>Symbol</th>
                <th>Polled Votes</th>
                <th>Margin</th>
                {/* partSchema=new mongoose.Schema({
                    "_id":{type:Number,required:true},
                    "partyname":{type:String,required:true},
                    "candidateName":{type:String,required:true},
                    "symbol":String,
                    "sname":String,
                    "pic":String,
                    "votes":{type:Number,default:0}
                }) */}
                <th>Won/Loss</th>
            </tr>
          
                {
                    data.map((el,i)=>
                    {
                        return(<tr>
                            <td>{i+1}</td>
                            <td>{el.partyname}</td>
                            <td>{el.candidateName}</td>
                            <td>{el.sname}</td>
                            <td>{el.votes}</td>
                            <td>{max-el.votes}</td>
                          { i>0 && <td id="red">LOST</td>}
                          { i==0 && <td id="green">WON</td>}
                        </tr>)
                    })
                }
           
        </table>

    </div>)
}
export default Dashboard