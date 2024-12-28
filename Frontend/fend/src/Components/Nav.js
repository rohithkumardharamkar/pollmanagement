import { Link } from "react-router-dom"
import AddParty from "./AddParty"

function Nav()
{
    return(<div>
        <nav>
        <Link to='/' element={<AddParty/>}/>

        </nav>

    </div>)
}
export default Nav