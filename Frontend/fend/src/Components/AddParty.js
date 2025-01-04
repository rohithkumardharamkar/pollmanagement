import { useState } from "react"
import axios from 'axios';
import { check } from "../utils/check";
import { useNavigate } from "react-router-dom";


function AddParty() {
    
    let [data, setData] = useState({});
    let [err, setErr] = useState("");
    let n=useNavigate()
    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function f(e)
    {
        setData({...data,"symbol":e.target.files[0]})
    }
    function add() {
        let c=check(data._id,data.partyname,data.candidateName,data.sname); 
        let d = new FormData()
        for (let el in data) {
            d.append(el, data[el])
        }
        axios.post("http://localhost:5000/party/addparty", d).then((el) => {
            n("/ahome")

        })
            .catch((err) => {
                setErr("ERROR")

            })
    }
    return (<div className="con">
        <div className="c1">
            <img src="https://www.shutterstock.com/image-vector/indian-politician-request-voting-flat-260nw-2026852076.jpg"/>
        </div>
        <div className="c2">
            <h1>Add Party</h1>
            <input id="x" type="text" placeholder="Enter party_id" onChange={fun} name="_id" value={data._id} />
            <input id="x" type="text" placeholder="Enter party name" onChange={fun} name="partyname" value={data.partyname} />
            <input id="x" type="text" placeholder="Enter candidate_name" onChange={fun} name="candidateName" value={data.candidateName} />
            <input id="x" type="text" placeholder="Enter Symbol Name" onChange={fun} name="sname" value={data.sname} />
            <div>
                <label>Upload Symbol : </label>
                <input type='file' onChange={f} />
            </div>
            
            <div>{err}</div>
            <button onClick={add}>Add Party</button>
        </div>
    </div>)

}
export default AddParty