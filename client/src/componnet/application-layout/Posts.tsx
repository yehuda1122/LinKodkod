import Post from "./Post"
import "../../style/posts.css"
import { useEffect } from "react"
// import { myContext } from "../../App"

export type post = {
  img: string;
  Description: string;
  author: string;
  timer: string;
  like: number | string
  id:number
}
type Posts = post[]

export default function Posts({ posts }: { posts: Posts }) {
  useEffect(()=> {} ,[posts])

  return (
    <div className="mainPosts" >
      {posts?.map((e: any) => (
        <Post key={e.id} post={e} />
      ))}
    </div>
  )
}
