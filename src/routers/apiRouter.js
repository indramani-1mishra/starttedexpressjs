import express from "express";
import v1Router from "./v1/v1.js";
import v2Router from "./v2/v2.js";

const router1 = express.Router();

router1.use("/v1",v1Router);
router1.use('/v2',v2Router);




export default router1;