import Posts from "../componnet/application-layout/Posts"
import { useContext,useEffect, useState } from "react"
import { Outlet } from 'react-router'
import {tokenContex} from "../App"
import "../style/homepost.css"


type Post = {
  img: string
  Description: string
  author: string
  timer: string
  like: number | string
  id: number
}
type Posts = Post[]

export default function HomePost() {

      const token = useContext(tokenContex)
    console.log("Tokken",token)

  const [posts, setPosts] = useState<Posts>([])

  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:3003/posts", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token?.token}`,
        }
          // credentials: "include"
        })

      const arrPost = await data.json();
      setPosts(arrPost)
    }
    getData()
  }, [])
  console.log("n", posts)

  return (
    <div className="mainHomePost">
      <Outlet />
      <Posts posts={posts} />
    </div>
  )
}
