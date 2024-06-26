const express = require('express');
const router = express.Router();
const User= require('./db/User');


router.post("/login",async(req,res)=>{
    if(req.body.password &&( req.body.email || req.body.name)){
    let user= await User.findOne(req.body).select("-password");
    if(user){
        res.send(user);
    }else{
        res.send("result not found");
    }
}else{
    res.send("no user found");
}
})


module.exports=router;