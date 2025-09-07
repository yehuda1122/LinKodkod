import Post from "./Post"
import "../../style/posts.css"

export default function Posts() {

  let time = new Date().toLocaleString()


  let posts = [{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my posts", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my post", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my post", author: "yehuda",like:"like", timer: time },{ img: "public/exsem.jpg", Description: "my post", author: "yehuda", timer: time }]

  return (
    <div className="mainPosts" >
      {posts.map((e, index) => (
        <Post index={index} post={e} />
      ))}
    </div>
  )
}
