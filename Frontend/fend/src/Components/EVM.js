import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addvote } from "../utils/vvslice";

function EVM()
{
    let [data,setData]=useState([]);
    let [t,setT]=useState(false);
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
            console.log("voted");
           
        }).catch((el)=>
        {
            console.log(el);
            
        })

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
                        <td><img src="https://www.shutterstock.com/image-vector/indian-politician-request-voting-flat-260nw-2026852076.jpg"/></td>

                        
                        <td>{el.candidateName}</td>
                        <td><img src="https://www.shutterstock.com/image-vector/indian-politician-request-voting-flat-260nw-2026852076.jpg"/></td>
                       
                        <td>{t?<button disabled id="r">you have voted</button>:<button onClick={()=>fun(el)}>VOTE</button>}

                        </td>
                    </tr>)
                })
            }
        </table>

    </div>)
}
export default EVM