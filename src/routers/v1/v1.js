import express from "express";
import commentRouter from "./commentsRouter.js";
import router from "./router.js";

const v1Router = express.Router();

v1Router.use('/comments',commentRouter);
v1Router.use('/tweets',router);

export default v1Router;