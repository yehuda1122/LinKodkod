import { Link } from "react-router"
import "../style/home.css"

export default function Home() {
    return (
        <div className="bodyHome">
            <h3>A platform for social dialogue between Kodokud members</h3>
            <header className="headerHome"></header>
            <div className="mainHome">
                <Link className="contentHome" to="/signUp">sing up</Link>
                <Link className="contentHome" to="/login">Login</Link>
            </div>
        </div>
    )
}
