import { useNavigate, Link } from "react-router"
import { useState } from "react";
import "../style/signUp.css"


export default function SignUp() {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [eror, setEror] = useState("")

  const newUser = {
    userName: user,
    password: pass
  }

  async function hendelSubmit(e: any) {
    e.preventDefault()
    const user = await fetch("http://localhost:3003/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
    const current = await user.json()
    console.log("qqq", current)
    if (current.success) {
      navigate("/login")
    }
    else {
      setEror(current.msg)
    }
  }

  return (
    <div>
      <form className="mainSignUp" onSubmit={hendelSubmit} action="">
        <h2 id="title">Sign Up</h2>
        <input className="inputSignUp" placeholder="entet name" onChange={(e) => { setUser(e.target.value) }} type="text" />
        <input className="inputSignUp" placeholder="enter password" onChange={(e) => { setPass(e.target.value) }} type="password" />
        <button className="ButtonSingUp">send</button>
        {eror && <div className="ErorSingUp">{eror}</div>}
        <p>Do you have account?</p>
        <Link className="log" to="/login">Login</Link>

      </form>
    </div>
  )
}
