
import express from "express"
import cors from "cors"
import { postsRouter,userRouter } from "./router/rout.js"
import cookieParser from "cookie-parser";


const app = express();
app.use(cookieParser());
app.use(cors({
    origin: "*",
    method: ["POST", "GET", "PUT", "DELETE", "OPTIONS", "PATCH"],
    alllowedHeaders: ["content-type", "Authorization"]
}))
app.use(express.json());


app.use("/posts", postsRouter)
app.use("/user", userRouter)

const Port = 3003
app.listen(Port, () => {
    console.log(`the server is run: ${Port}`);
})
