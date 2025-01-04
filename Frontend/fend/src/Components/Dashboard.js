import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "../utils/url";

function Dashboard()
{
    let [data,setData]=useState([]);
    let [b,setB]=useState(0);
    let [max,setMax]=useState(0);
    let [err,setErr]=useState("")

    function fun()
    {
        setB(b+1)
    }
    useEffect(()=>
    {
        axios.get(`${url}/party/getall`).then((el)=>{
            setData(el.data)
        })
        
        axios.get(`${url}/party/max`).then((el)=>{
           
           setMax(el.data[0].maxvotes)
        }).catch((el)=>setErr("error"))
    
    },[b])
    
    console.log(err);
    
    
    return(<div className="evm">
      
      {data ?  <button onClick={fun}>Refresh</button>:<div>NO ELECTION HAPPENED</div>}
      {err  && <div> NO ELECTION AT PRESENT</div>}
       {data.length>1 &&  <table border={1}>
            <tr>
                <th>Serial No.</th>
                <th>Party Name</th>
                <th>Candidate Name</th>
                <th>Symbol</th>
                <th>Polled Votes</th>
                <th>Margin</th>
              
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
                           { data && <td>{max-el.votes}</td>}
                          { i>0 && <td id="red">LOST</td>}
                          { i==0 && <td id="green">WON</td>}
                        </tr>)
                    })
                }
           
        </table>}

    </div>)
}
export default Dashboard