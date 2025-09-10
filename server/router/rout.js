import express from "express"
import { getAllPosts, createPost, deletePost, updatePost,getPostId } from "../controllers/postController.js";
import { addUser, login } from "../services/seviceUser.js";

import { verifyToken } from "../function/verify.js";

export const postsRouter = express.Router();
export const userRouter = express.Router();


postsRouter.get("/",verifyToken, getAllPosts);
postsRouter.post("/add",verifyToken, createPost);
postsRouter.delete("/:id", deletePost);
postsRouter.put("/update", updatePost);
postsRouter.get("/id/:id",getPostId)


userRouter.post("/add",addUser);
userRouter.post("/login",login);



