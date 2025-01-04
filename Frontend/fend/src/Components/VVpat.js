import { useSelector } from "react-redux"
import store from "../utils/store"
import { useState } from "react";
import { url } from "../utils/url";

function VVpat()
{
    let u=useSelector((store)=>store.vv.items);    
   localStorage.setItem("vvpat",JSON.stringify(u))
   let res=JSON.parse(localStorage.getItem("vvpat"));
   console.log(res);
   
   

    let [data,setData]=useState(res);

    
    
    return(<div className="ccc">
        {
            data.map((el)=>
            {
                return(<div className="vvpat">
<img src={`${url}/imgs/${el.symbol}`}/>
                </div>)
            })
        }

    </div>)
}
export default VVpat