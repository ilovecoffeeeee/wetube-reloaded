import express from "express";
import { getEdit, postEdit, logout, startGithubLogin, finishGithubLogin, see } from "../controllers/userController"
import { protectordMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectordMiddleware, logout);
userRouter.route("/edit").all(protectordMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);

export default userRouter;