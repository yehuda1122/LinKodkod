import { bcryptpassword, checkPass } from "../function/bcrypt.js"
import { getUsers, wrirteToUser } from "../servicesDAL/user.dal.js"
import jwt from "jsonwebtoken";

const secret = "tzMAlhgCs0qFrbQQsWEWfGr7G2iD3vHRlgYVLek5PR8rXbmJlzfxuIcgyMMJYtjxG38oAO5ocw6Ob1hFtZyO61bC6H9CJ"




export async function addUser(req, res) {
    let user = req.body
    // console.log('user', user);

    const UserBcryptpaswword = await bcryptpassword(user.password)
    try {
        const userDB = await getUsers()
        const check = userDB.find(e => e.userName === user.userName)

        if (check) {
            return res.status(400).json({ msg: "the name olredy exsist" })
        }
        user.password = UserBcryptpaswword;
        userDB.push(user)
        const data = await wrirteToUser(userDB)
        res.status(201).json({ success: true, msg: "The user added" })
    }
    catch (error) {
        console.error(error.masseg);
        res.status(400).json({ error: "the user not added" })
    }
}


export async function login(req, res) {
    const user = req.body
    // console.log(user);
    try {
        const userDB = await getUsers()

        const checkName = userDB.find(e => e.userName === user.userName)

        if (!checkName) {
            return res.json({ message: "the name not exsist" })
        }
        const check = await checkPass(user.password, checkName.password)
        if (check === true) {
            // console.log('d', process.env.JWT_SECRET);
            const token = jwt.sign({ name: userDB.name }, secret, { expiresIn: "1d" })
            res.cookie("token",token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax"
            });
            res.json({token, success: true, user: checkName.userName });

        }
        else {
            res.json({ success: false, message: "Wrong password" });
        }
    }
    catch (error) {
        console.error(error.message)
        res.status(400).json({ error: "database error" })
    }
}