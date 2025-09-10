import { useState} from "react";
import { useNavigate, Link } from "react-router"
import "../style/login.css"
// import { tokenContex } from "../App";


export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [eror, setEror] = useState("")

    // const context = useContext(tokenContex) 

    const log = {
        userName: user,
        password: pass
    }
    async function hendelSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const user = await fetch("http://localhost:3003/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(log)
        })
        const current = await user.json()
        if (current.success) {
                navigate("/HomePost")
        }
        else
            setEror(current.message)
            navigate("/login")
    }

    return (
        <div>
            <form className="mainLogin" onSubmit={hendelSubmit} >
                <h2>Login</h2>
                <input className="inputLogin" value={user} placeholder="entet name" onChange={(e) => { setUser(e.target.value) }} name="usernName" type="text" />
                <input className="inputLogin" value={pass} placeholder="enter password" onChange={(e) => { setPass(e.target.value) }} name="password" type="password" />
                <button className="button">Log In</button>
                {eror && <div id="eror">{eror}</div>}
                <p>don't have an account?</p>
                <Link className="sinngUpLog" to="/signUp">sing up</Link>
            </form>
        </div>
    )
}

