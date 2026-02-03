import {Router} from "express"
import { login, singup } from "../controllers/userControllers.js"

const authRouter = Router()

authRouter.post("/singup",singup)
authRouter.post("/login",login)

export default authRouter