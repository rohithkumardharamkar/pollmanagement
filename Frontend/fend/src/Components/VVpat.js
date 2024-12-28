import { useSelector } from "react-redux"
import store from "../utils/store"
import { useState } from "react";

function VVpat()
{
    let u=useSelector((store)=>store.vv.items);
    console.log(u);
    let [data,setData]=useState(u);
    
    return(<div>
        {
            data.map((el)=>
            {
                return(<div>{el.partyname}</div>)
            })
        }

    </div>)
}
export default VVpat