import { Link } from "react-router-dom"
import AddParty from "./AddParty"
import VVpat from "./VVpat"

function Nav()
{
    return(<div>
        <nav>
            <Link to='/'>home</Link>
      
       <Link to='/admin'>Admin</Link>

        </nav>

    </div>)
}
export default Nav