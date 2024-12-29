import { useSelector } from "react-redux"
import store from "../utils/store"
import { useState } from "react";

function VVpat()
{
    let u=useSelector((store)=>store.vv.items);    
   localStorage.setItem("vvpat",JSON.stringify(u))
   let res=JSON.parse(localStorage.getItem("vvpat"));
   console.log(res);
   
   
    // console.log(localStorage);

    let [data,setData]=useState(res);

    
    
    return(<div className="ccc">
        {
            data.map((el)=>
            {
                return(<div className="vvpat">
<img src="https://www.shutterstock.com/image-vector/indian-politician-request-voting-flat-260nw-2026852076.jpg"/>

                </div>)
            })
        }

    </div>)
}
export default VVpat