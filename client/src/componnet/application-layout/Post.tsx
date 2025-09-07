// import fs from "fs/promises";

type post = {
  img: string;
  Description: string;
  author: string;
  timer: string;
}[]


import { useState } from "react";
import "../../style/post.css"
export default function Post({ post }: post) {
  const [like, setLike] = useState(0)

  return (
    <div className="mainPost" >
      <img className="imgPost" src={post.img} alt="" />
      <div className="botonpPost">
        <h3 className="TitlePost">{post.Description}</h3>
        <button onClick={() => { setLike(like + 1) }} >{like} {post.like}</button>
        <div className="mainTxtPost">
          <p>author: {post.author}</p>
          <p>{post.timer}</p>
        </div>
      </div>

    </div>
  )
}
