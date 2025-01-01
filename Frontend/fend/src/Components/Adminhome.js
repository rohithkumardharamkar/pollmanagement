import { Link } from "react-router-dom"

function Adminhome()
{
    return(<div className="home">
        <div> <Link to='/dashboard'>Dashboard</Link></div>
        <div>         <Link to='/vv'>VV PAT</Link>
        </div>
        <div>
        <Link to='/add'>Add Party</Link>
        </div>
    </div>)
}
export default Adminhome