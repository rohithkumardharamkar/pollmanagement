import axios from "axios";
import { useRef, useState } from "react"

function Login() {
    let t1=useRef();
    let t2=useRef();
    let t3=useRef();
    let [o,setO]=useState('');
    let [c,setC]=useState(0);
    function fun()
    {
        if(t2.current.value=='')
        {
            return
        }
        axios.post("http://localhost:5000/user/getotp",{'email':t2.current.value}).then((el)=>
        {
            setO(el.data.OTP)
        })
    }
    console.log(o);
    
    function fun2()
    {
       
        
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
    
        if(o && c)
        {
            console.log("jjjjjj");
            if(t1.current.value!='')
                {
                    axios.post("http://localhost:5000/user/check",{_id:t1.current.value,email:t2.current.value}).then((el)=>{
                        console.log(el);
                        
                    }).catch((err)=>
                    {
                        console.log(err);
                        
                    })
                }
            
        }
        else
        {
            console.log("all values are required");
            
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
    </div>
    </div>)
}
export default Login