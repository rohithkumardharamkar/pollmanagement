import { useState } from "react"
import axios from 'axios'

function AddParty()
{
    let [data,setData]=useState({});
    function fun(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    function add()
    {
        axios.post("http://localhost:5000/party/addparty",data).then((el)=>{
            console.log(el)
            
        })
        .catch((err)=>
        {
            console.log(err);
            
        })
    }
    return(<div className="adcon">
        <div>

            <input type="text" placeholder="Enter party_id" onChange={fun} name="_id" value={data._id} />
            <input type="text" placeholder="Enter party name" onChange={fun} name="partyname" value={data.partyname}  />
            <input type="text" placeholder="Enter candidate_name"  onChange={fun} name="candidateName" value={data.candidateName} />
            <input type="text" placeholder="Enter Symbol Name" onChange={fun} name="sname" value={data.sname} />
           <div>
            <label>Upload Symbol</label>
            <input type='file'/>
           </div>
           <div>
            <label>Upload Candidate photo</label>
            <input type='file'/>
           </div>
           <button onClick={add}>Add Party</button>

        </div>

    </div>)

}
export default AddParty