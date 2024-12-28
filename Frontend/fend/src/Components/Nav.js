import { Link } from "react-router-dom"
import AddParty from "./AddParty"
import VVpat from "./VVpat"

function Nav()
{
    return(<div>
        <nav>
        <Link to='/'>home</Link>
       <Link to='/vv'>vvpat</Link>
       <Link to='/evm'>evm</Link>
       <Link to='/dashboard'>Dashboard</Link>
       <Link to='/login'>Login</Link>

        </nav>

    </div>)
}
export default Nav