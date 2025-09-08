
import fs from "fs/promises";

export async function getData() {
    const data = await fs.readFile("./data/posts.json", { encoding: "utf-8" })    
    return JSON.parse(data)
}

export async function writeData(newData) {
    // const data = await fs.readFile("./data/posts.json", { encoding: "utf-8" })
    // const posts = JSON.parse(data)
    // // posts.push(newData)
    await fs.writeFile("./data/posts.json", JSON.stringify(newData), "utf-8");
    return newData
}