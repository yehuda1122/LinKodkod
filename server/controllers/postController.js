import { getPosts, writeNewPost, DeletePostInList,updateSingelPost } from "../services/servicePost.js";

export async function getAllPosts(req, res) {
    try {
        const respons = await getPosts();
        // console.log('rre',respons);
        res.status(200).json(respons)

    }
    catch (error) {
        res.status(500).json({ error: "not read" })
    }
}

export async function createPost(req, res) {
    try {
        const newPost = req.body
        if (!newPost.img || !newPost.Description) {
            res.json({ msg: "Image and description required" })
        }
        await writeNewPost(newPost);
        res.status(201).json({ msg: "The post created" })

    }
    catch (error) {
        res.status(400).json({ error: "not created" })
    }
}


export async function deletePost(req, res) {
    const newData = req.params.id
    const id = parseInt(newData)
    console.log("n", newData);
    try {
        const check = await DeletePostInList(id);
        console.log('ceck', check);

        if (!check) {
            res.json({ msg: "the post not exsist" })
        }
        res.status(200).json({ post: check, msg: "the post delete" })
    }
    catch (error) {
        res.status(400).json({ error: "not delete " })
    }
}

export async function updatePost(req, res) {
    const newData = req.body   
    try {
        await updateSingelPost(newData);
        res.status(200).json({msg: "the post updatead" })
    }
    catch (error) {
        res.status(400).json({ error: "not updatead" })
    }
}