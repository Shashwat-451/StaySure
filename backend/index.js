import express, { request } from "express";
import cors from "cors";
import mongoose from "mongoose";


const app=express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());


// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },()=>{
//     console.log("DB connected successfully");
// })

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 
}).then(() =>{
    console.log(`connection successfull`);

}).catch((e) => {
    console.log(e);
})
//creating schema
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
//creating model
const User=new mongoose.model("User",userSchema)
//Routes
app.post("/login",(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
         if(password===user.password)
         {
            res.send({message:"Login successfull",user:user})
         }
         else
         {
            res.send({message:"Password did not match"})
         }
       }
       else{
        res.send({message: "User not registered"})
       }
       
    
    })
})


app.post("/register",(req,res)=>{
//    console.log(req.body)

   const {name,email,password}=req.body
   User.findOne({email:email},(err,user)=>{
    if(user){
    res.send({message:"User already registered"})
   }
   else{
    const user=new User({
        name,
        email,
        password
       })
    
       user.save(err=>{ //save function to store data in db
        if(err)
        {
            // console.log(err);
            res.send(err)
        }else{
            res.send({message:"Successfully Registered,Please Login Now"})
            
        }
       })
   }
   

})

})
app.listen(9000,()=>{
    console.log("BE started at port 9000")
})