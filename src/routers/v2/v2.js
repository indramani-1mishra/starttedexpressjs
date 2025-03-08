import express from "express";
import commentRouter from "./commentsRouter.js";
import router from "./router.js";
const v2Router = express.Router();
v2Router.use('/comments',commentRouter);
v2Router.use('/tweets',router);

export default v2Router