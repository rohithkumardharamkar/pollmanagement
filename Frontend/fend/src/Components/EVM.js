import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addvote } from "../utils/vvslice";
import { useNavigate } from "react-router-dom";

function EVM()
{
    let [data,setData]=useState([]);
    let [t,setT]=useState(false);
    let n=useNavigate("")
    let d=useDispatch()
    useEffect(()=>
    {
        axios.get("http://localhost:5000/party/getall").then((res)=>{
            setData(res.data)
        })
    },[])
    
    function fun(e)
    {
        setT(true)

        d(addvote(e))
        axios.post("http://localhost:5000/party/vote",{"_id":e._id}).then((el)=>{
           
        }).catch((el)=>
        {
            console.log(el);
            
        })
        setTimeout(()=>
        {n("/login")},3000)

    }
    return(<div className="evm">
        <table border={1}>
            <tr>
                <th>Serial No.</th>
                <th>Party Name</th>
                <th>Symbol</th>
                <th>Candidate Name</th>
                <th>Candidate photo</th>
                <th></th>
            </tr>
            {
                data.map((el,i)=>{
                    return(<tr>
                        <td>{i+1}</td>
                        <td>{el.partyname}</td>
                        <td><img src={`http://localhost:5000/imgs/${el.symbol}`}/></td>
                        <td>{el.candidateName}</td>
                        <td>{t?<button disabled id="r">you have voted</button>:<button onClick={()=>fun(el)}>VOTE</button>}

                        </td>
                    </tr>)
                })
            }
        </table>

    </div>)
}
export default EVM