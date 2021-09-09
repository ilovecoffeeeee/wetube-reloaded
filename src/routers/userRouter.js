import express from "express";
import { getEdit, postEdit, logout, startGithubLogin, finishGithubLogin, see, getChangePassword, postChangePassword } from "../controllers/userController"
import { protectordMiddleware, publicOnlyMiddleware, avatarUpload } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectordMiddleware, logout);
userRouter.route("/edit").all(protectordMiddleware).get(getEdit).post(avatarUpload.single("avatar"), postEdit);
userRouter.route("/change-password").all(protectordMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get("/:id", see);

export default userRouter;