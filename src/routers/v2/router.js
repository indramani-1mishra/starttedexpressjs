import express from "express";
import { gettweets, gettweetsbyid } from "../../controller/tweetcontroller.js";

const router = express.Router();


router.get("/",gettweets);


router.get("/:id",gettweetsbyid);

export default router;
