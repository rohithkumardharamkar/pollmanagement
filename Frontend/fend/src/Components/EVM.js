import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addvote } from "../utils/vvslice";

function EVM()
{
    let [data,setData]=useState([]);
    let d=useDispatch()
    useEffect(()=>
    {
        axios.get("http://localhost:5000/party/getall").then((res)=>{
            setData(res.data)
        })
    },[])
    function fun(e)
    {

        d(addvote(e))
        axios.post("http://localhost:5000/party/vote",{"_id":e._id}).then((el)=>{
            console.log("voted");
           
        }).catch((el)=>
        {
            console.log(el);
            
        })
        
    }
    return(<div>
        <table border={1}>
            <tr>
                <th>Serial No.</th>
                <th>Party Name</th>
                <th>Symbol</th>
                <th>Candidate Name</th>
                <th>Candidate photo</th>
            </tr>
            {
                data.map((el)=>{
                    return(<tr>
                        <td>{el._id}</td>
                        <td>{el._id}</td>
                        <td>{el._id}</td>
                        <td>{el._id}</td>
                        <td>{el._id}</td>
                        <td><button onClick={()=>fun(el)}>Vote</button></td>
                    </tr>)
                })
            }
        </table>

    </div>)
}
export default EVM