import express from "express"
import { getAllPosts, createPost, deletePost, updatePost } from "../controllers/postController.js";

// import { verifyToken } from "../function/verify.js";
// export const plyeerRouter = express.Router()

export const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);
postsRouter.post("/add", createPost);
postsRouter.delete("/:id", deletePost);
postsRouter.put("/update", updatePost);



