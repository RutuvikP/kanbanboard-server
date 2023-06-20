const jwt=require('jsonwebtoken');

const authenticate=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];

    if(token){
        const decoded=jwt.verify(token,"eval")
        if(decoded){
            req.body.authorID=decoded.authorID;
            next();
        }else{
            res.send({'msg':"Invalid Token!!"})
        }
    }else{
        res.send({'msg':"Please Login!!"})
    }
}

module.exports={authenticate}