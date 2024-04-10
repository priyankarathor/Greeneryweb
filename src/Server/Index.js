const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 8000

//schema
const schemaData = mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    message : String
},{
    timestamps :true
})

const userModel = mongoose.model("user",schemaData)

//read data
app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true, data : data})
})
//craete data // save data in mongodb
app.post("/create",async(req,res)=>{
        console.log(req.body)
        const data= new userModel(req.body)
        await data.save()
        res.send({success:true,message:"data save success"})
})


mongoose.connect("mongodb://localhost:27017/customerform")
.then(()=>{
    app.listen(PORT,()=>console.log("Server is runing"))
})
.catch((err)=>console.log(err))

