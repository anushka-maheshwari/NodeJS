const express=require("express");
const router=express.Router();
const credentials={
    email:"admin@gmail.com",
    password:"admin123"
}
router.post('/login',(req,res)=>{
    if(req.body.email==credentials.email && req.body.password==credentials.password)
    {
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');
    }
    else{
        res.end("invalid username");
    }
})
router.get('/dashboard',(req,res)=>{
    if(req.session.user)
    {
        res.render('dashboard')
    }else{
        res.send("unauthorized user")
    }
})
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err)
        {
            console.log(err);
            res.send("Error");
        }else{
            res.render('index',{title:"logout"});
        }
    })
})
module.exports=router;