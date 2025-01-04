import axios from "axios";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { url } from "../utils/url";

function Login() {
    let t1=useRef();
    let t2=useRef();
    let t3=useRef();
    let [o,setO]=useState('');
    let [c,setC]=useState(0);
    let [err,setErr]=useState("")
    let n=useNavigate("")
    function fun()
    {
        if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t2.current.value))
        {
            console.log("correct");
            
        }
        else
        {
            console.log("wromg");

            return
            
        }
        if(t2.current.value=='')
        {
            return
        }
        axios.post(`${url}/user/getotp`,{'email':t2.current.value}).then((el)=>
        {
            setO(el.data.OTP)
        })
    }
    console.log(o);
    
    function fun2()
    {
        console.log(o,c);
        
       
        
        if(t3.current.value=='')
            {

                return
            }
        let a=t3.current.value;
        if(a==o)
        {
            setC(c+1)
        }
    }
    function vote()
    {
        if(c && o)
        {
        
            console.log("jjjjjj");
            if(t1.current.value!='')
                {
                    axios.post(`${url}/user/check`,{_id:t1.current.value,email:t2.current.value}).then((el)=>{
                        console.log(el);
                        setErr(el.data.msg)
                        n("/evm")
                        
                    }).catch((err)=>
                    {
                        console.log(err);
                        setErr("Already voted")
                        
                    })
                }
            }
            else
            {

                return
            }
       
       
    }
    return (<div className="ct">
        <div className="container">
        <h3>Welcome to Vote</h3>
        <input type="text" placeholder="Enter your Voter -id" ref={t1} />
        <div>
            <input type="text" placeholder="Enter your email " ref={t2}  />
            {o?<span>OTP sent</span>:<button onClick={fun}>Get OTP</button>}
        </div>
        <div>
           {c==0 && <input type="text" placeholder="Enter OTP " ref={t3} />}
          {c?  <span>OTP Verified</span> :<button onClick={fun2}>Validate</button>}
        </div>
        <div>  <button onClick={vote}>Login to Vote</button></div>
        <div>{err}</div>
    </div>
    </div>)
}
export default Login