import { Link } from "react-router-dom"

function Home()
{
    return(<div className="home">
        <div><Link to='/login'>Voter</Link></div>
        <div><Link to='/admin'>Admin</Link></div>

    </div>)
}
export default Home