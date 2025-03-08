import express from "express";
import morgan from "morgan";

const app = express();


   app.use(express.json());



   function mid1(req, res, next) {
    console.log("Middleware 1");
    next();
   }
   function mid2(req, res, next) {
    console.log("Middleware 2");
    next();
   }
   function mid3(req, res, next) {
    console.log("Middleware 3");
    next();
   }
   const middleware= [mid1, mid2, mid3];
  app.use(morgan("combined"));

  app.get("/ping",middleware ,(req, res) => {
    console.log(req.query)
    
    return res.json({
        message: "pong"
    });
  });

  app.get("/raj/:id/comments/:commentsid",(req, res) => {
    console.log(req.params)
    return res.json({
        message: "raj"
    });
    });
  app.post("/hello",[mid1,mid2] ,(req, res) => {
    console.log(req.body);

    return res.json({
        message: "world"
    });
  });

 
  app.all("*", (req, res) => {
    return res.status(404).json({
      message: "not found"
    });
  });
  

app.listen(3000,()=>
{
    console.log("Server is running on port 3000");
})