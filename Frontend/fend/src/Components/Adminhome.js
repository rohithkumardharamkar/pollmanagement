import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import store from "../utils/store";
import { getAuth, signOut } from "firebase/auth";
import axios from "axios";


function Adminhome()
{
    let r=useSelector((store)=>store.user);
    let n=useNavigate(null)
    function fun()
    {
        const auth = getAuth();
signOut(auth).then(() => {
    n("/")
}).catch((error) => {});

    }
    function f()
    {
        axios.delete("http://localhost:5000/party/del").then((el)=>{
            
        })
    }
    
    return(<div className="home">
        <div> <Link to='/dashboard'>Dashboard</Link></div>
        <div>         <Link to='/vv'>VV PAT</Link>
        </div>
        <div>
        <Link to='/add'>Add Party</Link>
        </div>
        <div>
            <button onClick={fun}>Sign out</button>
        </div>
        <div>
            <button onClick={f}>Delete</button>
        </div>
    </div>)
}
export default Adminhome