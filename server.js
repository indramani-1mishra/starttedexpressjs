import express from "express";
import morgan from "morgan";
import { PORT } from "./src/configlayer/serverconfig.js";
import router1 from "./src/routers/apiRouter.js";


const app = express();


   app.use(express.json());
   app.use("/api",router1)


   function mid3(req, res, next) {
    console.log("Middleware 3");
    next();
   }

  app.use(morgan("combined"));

 

  


 
  app.all("*", (req, res) => {
    return res.status(404).json({
      message: "not found"
    });
  });
  

app.listen(PORT,()=>
{
    console.log(`Server is running on port ${PORT}`);
})