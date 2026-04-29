import { Router } from "express";
import { getMe, login, logout, signup } from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";

const authRouter = Router();

authRouter.post("/register", signup);
authRouter.post("/login", login);
authRouter.post("/logout", auth , logout)
authRouter.get("/get-me", getMe)

export default authRouter;
