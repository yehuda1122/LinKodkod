
import fs from "fs/promises";

export async function getUsers() {
    const data = await fs.readFile("./data/user.json", { encoding: "utf-8" })    
    return JSON.parse(data)
}

export async function wrirteToUser(newData) {
    await fs.writeFile("./data/user.json", JSON.stringify(newData), "utf-8");
    return newData
}