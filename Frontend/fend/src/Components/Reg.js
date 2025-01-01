import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { checkvalidate } from "../utils/validate";
function Reg()
{
    let t1=useRef(null);
    let t2=useRef(null);
    let t3=useRef(null);
    let [err,setErr]=useState(null);
    function fun()
    {
        let c=checkvalidate(t2.current.value,t3.current.value)
        setErr(c)
    }
    
    return(<div className="ct">
        <div className="container">
         <h2>Admin Registration</h2>
        <input type="text" placeholder="Enter name of the Election"  ref={t1}/>
        <input type="text" placeholder="Enter email-id" ref={t2}/>
        <input type="password" placeholder="Enter Officer Id" ref={t3}/>
        <Link to='/admin'>Admin Login</Link>
        <div>{err}</div>
        <button onClick={fun}>Login</button>
    </div>
    </div>)
}
export default Reg