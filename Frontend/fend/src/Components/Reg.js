import { Link } from "react-router-dom"

function Reg()
{
    return(<div className="ct">
        <div className="container">
         <h2>Admin Registration</h2>
        <input type="text" placeholder="Enter name of the Election"/>
        <input type="text" placeholder="Enter email-id"/>
        <input type="password" placeholder="Enter Officer Id"/>
        <Link to='/admin'>Admin Login</Link>
        <button>Login</button>
    </div>
    </div>)
}
export default Reg