export const  getcomments =(req,res)=>
{
    return res.json({
        message: "Hello, I am from the comments URL version 2"
    });
}
export const  getcommentsbyid =(req,res)=>
    {
        return res.json({
            message: "Hello, I am from the comments id version 2",
            id:req.params.id
        });
    }
    
export const gettweets= (req,res)=>
{
    return res.json({
        message: "Welcome to tweet form v2"
    });

}

export const gettweetsbyid= (req,res)=>
    {
        return res.json({
            message: `Welcome to tweet v2 comment ID: ${req.params.id}`,
            id: req.params.id,
        });
    
    }

    export const createTweet =(req,res)=>
    {
        return res.json({
            message:"welcome to create tweet controller"
        })
    }