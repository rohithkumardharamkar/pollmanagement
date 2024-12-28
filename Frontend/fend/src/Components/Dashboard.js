import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard()
{
    let [data,setData]=useState([]);
    let [b,setB]=useState(0);
    function fun()
    {
        setB(b+1)
    }
    useEffect(()=>
    {
        axios.get("http://localhost:5000/party/getall").then((el)=>{
            setData(el.data)
        })

    },[b])
    
    return(<div>
        <button onClick={fun}>Refresh</button>
        <table border={1}>
            <tr>
                <th>Serial No.</th>
                <th>Party Name</th>
                <th>Party Symbol</th>
                <th>Candidate Name</th>
                <th>Candidate Photo</th>
                <th>Polled Votes</th>
                <th>Margin</th>
                <th>Won/Loss</th>
            </tr>
          
                {
                    data.map((el,i)=>
                    {
                        return(<tr>
                            <td>{i+1}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{el.votes}</td>
                            <td></td>
                            <td></td>
                        </tr>)
                    })
                }
           
        </table>

    </div>)
}
export default Dashboard