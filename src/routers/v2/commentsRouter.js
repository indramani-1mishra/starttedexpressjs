import express from "express";
import { getcomments, getcommentsbyid } from "../../controller/tweetcontroller.js";

const commentRouter = express.Router();

commentRouter.get("/",getcomments);
commentRouter.get("/:id",getcommentsbyid);


export default commentRouter;
