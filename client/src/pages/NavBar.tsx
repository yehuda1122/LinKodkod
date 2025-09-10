import { Link } from "react-router"
import "../style/navBar.css"
export default function NavBar() {
    return (
        <div>
            <nav className="NavBar">
                <Link className="LinkBar" to="/homePost">Home</Link>
                <Link className="LinkBar" to="/AddPost">Add post</Link>
            </nav>
        </div>
    )
}
