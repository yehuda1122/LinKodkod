import { Link } from "react-router-dom";
// import { useContext } from "react"
// import { myContext } from "../../App"
export type post = {
  img: string;
  Description: string;
  author: string;
  timer: string;
  like: number | string
  id:number
}


import { useState, type PropsWithChildren } from "react";
import "../../style/post.css"
export default function Post({ post }: PropsWithChildren & { post: post }) {
  const [like, setLike] = useState(0)

  // const postser = useContext(myContext)
  console.log("object",post.timer,post.Description)
  return (
      <Link  className="Link" to={`/${post.id}`}>
    <div className="mainPost" >
          <p className="author">{post.author}</p>
        <img className="imgPost" src={`http://localhost:3003/${post.id}.jpeg`} alt="img" />
        <button onClick={() => { setLike(like + 1) }} >{like} {post.like}👍</button>
        <p className="TitlePost">{post.Description}</p>
          <p className="time">{post?.timer}</p>
    </div>
      </Link>
  )
}
