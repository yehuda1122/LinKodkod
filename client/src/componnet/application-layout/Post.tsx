import { Link } from "react-router-dom";
import { useContext } from "react"
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

  return (
    <div className="mainPost" >
      <Link to={`/${post.id}`}>
        <img className="imgPost" src={post.img} alt="" />
        <button onClick={() => { setLike(like + 1) }} >{like} {post.like}</button>
        <h3 className="TitlePost">{post.Description}</h3>
        <div className="mainTxtPost">
          <p>author: {post.author}</p>
          <p>{post.timer}</p>
        </div>
      </Link>
    </div>
  )
}
