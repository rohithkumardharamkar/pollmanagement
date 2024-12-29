import { Link } from "react-router-dom"

function Admin()
{
    return(<div className="ct">
        <div className="container" >
        <h2>Admin Login</h2>
        <input type="text" placeholder="Enter name of the Election"/>


        <input type="text" placeholder="Enter email-id"/>
        <input type="password" placeholder="Enter Officer Id"/>
        <Link to='/reg'>Admin Registration</Link>
        <button>Login</button>

    
    </div>

    </div>)

}
export default Admin