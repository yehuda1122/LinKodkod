import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

type Post = {
  img: string,
  id: number
  Description: string
  author: string
  like: string
  time: string
}
type Posts = Post[]


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
      <img className="imgPost" src={post?.img} alt="" />
      {/* <button onClick={() => { setLike(like + 1) }} >{post?.like}</button> */}
      <h3 className="TitlePost">{post?.Description}</h3>
      <div className="mainTxtPost">
        <p>author: {post?.author}</p>
        <p>{post?.time}</p>
      </div>
    </div>
  )
}
