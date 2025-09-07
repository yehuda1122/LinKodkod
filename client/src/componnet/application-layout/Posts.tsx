import Post, { type post } from "./Post"
import "../../style/posts.css"

export default function Posts() {

  let time = new Date().toLocaleString()


  let posts = [{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my post", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my post", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my post", author: "yehuda", timer: time }] as post[]

  return (
    <div className="mainPosts" >
      {posts.map((e) => (
        <Post  post={e} />
      ))}
    </div>
  )
}
