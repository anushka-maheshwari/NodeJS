const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=process.env.PORT||3000;
app.use(function(req,res,next){
    var filepath=path.join(__dirname,"static",req.url);
    fs.stat(filepath,function(err,fileinfo){
        if(err)
        {
            next();
            return;
        }
        if(fileinfo.isFile()){
            res.sendFile(filepath);
        }else{
            next()
        }
    })
});
app.use(function(req,res){
    res.status(404);
    res.send("File Not Found")
})
app.listen(3000,()=>{console.log(`Server is listening at http://localhost:${port}`)});