import { getData, writeData } from "../servicesDAL/postDal.js"


export async function getPosts() {
    const data = await getData()
    return data
}


export async function getPostById(id) {

    const data = await getData()
    if (!id) {
        return false
    }
    const post = data.find(d => d.id === id)
    // console.log('post',post);
    return post
}

export async function writeNewPost(newPost) {
    let count = 0
    const posts = await getData()
    if (!newPost) {
        return false
    }
    count = Math.max(...posts.map(e => e.id))
    newPost.id = count + 1
    posts.push(newPost)
    const post = await writeData(posts)

    if (post) {
        return true
    }
}

export async function DeletePostInList(id) {
    const posts = await getData()
    const index = posts.findIndex(idx => idx.id === id)
    if (index === -1) {
        return null
    }
    const deletePode = posts.splice(index, 1)
    // console.log('posts',deletePode);    
    await writeData(posts)
    return deletePode
}

export async function updateSingelPost(newData) {
    const post = await getPostById(newData.id)
    const posts = await getData()
    if (!newData) {
        return null
    }

    if (newData.img) {
        post.img = newData.img
    }
    if (newData.Description) {
        post.Description = newData.Description
    }
    const index = posts.findIndex(idx => idx.id === post.id)
    if (index === -1) {
        return null
    }
    posts[index] = post
    // console.log('post',post);
    // console.log('elemnt',posts);
    return await writeData(posts)
}

