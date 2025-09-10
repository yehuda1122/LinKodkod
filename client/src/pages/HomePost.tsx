import Posts from "../componnet/application-layout/Posts"
import { useEffect, useState } from "react"


type Post = {
  img: string,
  id: number
  Description: string
  author: string
  like: string
  time: string
}
type Posts = Post[]

export default function HomePost() {

const [posts,setPosts] = useState<null | Posts>([   ])

      useEffect(() => {
        async function getData() {
          const data = await fetch("http://localhost:3003/posts")
          const arrPost = await data.json();
          setPosts(arrPost)
        }
        getData()
    }, [])
    console.log("n",posts)
    
    return (
        <div>
            <Posts posts={posts} />
        </div>
    )
}
