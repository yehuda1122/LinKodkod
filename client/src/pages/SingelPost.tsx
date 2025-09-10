import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Outlet } from 'react-router'
import "../style/singlePost.css"


type Post = {
  img: string,
  id: number
  Description: string
  author: string
  like: string
  time: string
}
// type Posts = Post[]


export default function SingelPost() {

  const [post, setPost] = useState<null | Post>(null)


  const { id } = useParams()

  useEffect(() => {
    async function getPost() {
      const res = await fetch(`http://localhost:3003/posts/id/${id}`)
      const data = await res.json()
      setPost(data)
      console.log("object", data)
    }
    getPost()
  }, [])

  return (
    <div>
      <Outlet />
      <div className="mainSingelPost">
      <p className="name">{post?.author}</p>
      <img className="imgPostSingel" src={`http://localhost:3003/${id}.jpeg`} alt="" />
      {/* <button onClick={() => { setLike(like + 1) }} >{post?.like}</button> */}
      <h3 className="TitlePost">{post?.Description}</h3>
      <p className="TimeSingel">{post?.time}</p>
      </div>
    </div>
  )
}
