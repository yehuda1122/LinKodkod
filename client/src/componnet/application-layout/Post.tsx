// import fs from "fs/promises";

export type post = {
  img: string;
  Description: string;
  author: string;
  timer: string;
  like : number|string
}


import { useState, type PropsWithChildren } from "react";
import "../../style/post.css"
export default function Post({ post }: PropsWithChildren & {post: post}) {
  const [like, setLike] = useState(0)

  return (
    <div className="mainPost" >
      <img className="imgPost" src={post.img} alt="" />
      <button onClick={() => { setLike(like + 1) }} >{like} {post.like}</button>
      <h3 className="TitlePost">{post.Description}</h3>
      <div className="mainTxtPost">
        <p>author: {post.author}</p>
        <p>{post.timer}</p>
      </div>

    </div>
  )
}
