const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT||3000;
const session=require("express-session");
const bodyparser=require("body-parser");
const{v4:uuidv4}=require("uuid");
const router=require("./router");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    secret:uuidv4(),
    resave:false,
    aveUnintialized:true

}));
app.use('/route',router);
app.set('view engine','ejs');
app.use('/static',express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('index',{title:"LOGIN SYSTEM"})
}).listen(port,()=>{console.log(`server is listening at port ${port}`)});