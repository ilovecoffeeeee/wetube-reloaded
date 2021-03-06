import express from "express";
import { 
    watch, 
    getUpload,
    getEdit,
    postEdit,
    postUpload,
    deleteVideo,
} from "../controllers/videoController";
import { protectordMiddleware, publicOnlyMiddleware, videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.route("/:id([0-9a-f]{24})").get(watch);
videoRouter
    .route("/:id([0-9a-f]{24})/edit")
    .all(protectordMiddleware)
    .get(getEdit)
    .post(postEdit);
videoRouter
    .route("/:id([0-9a-f]{24})/delete")
    .all(protectordMiddleware)
    .get(deleteVideo);
videoRouter
    .route("/upload")
    .all(protectordMiddleware)
    .get(getUpload)
    .post(videoUpload.fields([
        {name:"video"},
        {name:"thumb"},
    ]), postUpload);

export default videoRouter;