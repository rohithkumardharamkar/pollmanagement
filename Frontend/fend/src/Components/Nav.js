
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addusers, removeuser } from '../utils/userslice';
import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nav()
{
    
    let dispatch=useDispatch();
    let nav=useNavigate()
    useEffect(()=>
    {
      const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    
    if (user) {
      dispatch(addusers({name:user.displayName,email:user.email,uid:user.uid}));
    } else {
    

      dispatch(removeuser())
      nav("/")
    }
  },[]);
  
  
    },[])
  
    return(<div>
        <nav>
       
        </nav>

    </div>)
}
export default Nav