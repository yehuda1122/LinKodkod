import { useState, useContext } from "react"
import { useNavigate } from "react-router"

// import { tokenContex } from "../App"
import "../style/addPost.css"

export default function AddPost() {
    const navigate = useNavigate()

    const [img, setImg] = useState("")
    const [Description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [msg, setMsg] = useState("")

    // const token = useContext(tokenContex)
    // console.log("Tokken",token)

    const newPost = {
        img: img,
        Description: Description,
        author: author
    }

    async function addPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const add = await fetch("http://localhost:3003/Posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${token?.token}`,
            },
            body: JSON.stringify(newPost)
            //   credentials: "include" 
        })
        const data = await add.json();
        console.log("object", data)
        if (data.success) {
            navigate("/HomePost")
        }
        else {
            setMsg(data.eror)
        }

    }

    return (
        <div >
            <form className="mainAdd" onSubmit={addPost}>
                <h1 className="title">Create Post </h1>
                <input className="inputAdd" value={img} placeholder="entet url img" onChange={(e) => { setImg(e.target.value) }} type="text" />
                <input className="inputAdd" value={Description} placeholder="enter Description" onChange={(e) => { setDescription(e.target.value) }} type="text" />
                <input className="inputAdd" value={author} placeholder="entet author" onChange={(e) => { setAuthor(e.target.value) }} type="text" />
                <button className="buttonAdd">submit</button>
                {msg && <p>{msg}</p>}
            </form>
        </div>
    )
}
