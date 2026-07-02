require('dotenv').config()
const express=require('express')
const cors=require('cors')
const axios=require('axios')
const app=express()
app.use(express.json())
app.use(cors())
API=process.env.API_BASE_URI;
PORT=process.env.PORT||3000
API_KEY=process.env.API_KEY;
console.log(API_KEY)
const headers={
    Authorization : `Bearer ${API_KEY}`
}
app.get("/notification",async(req,res)=>{
    try
    {
    const response=await axios.get(`${API}/notifications`,{headers})
    console.log(response.data)
    return res.json(response.data)
    }
    catch(err)
    {
        console.log(err.message);
         return res.json({
            success:false,
            message:"Failed to retrive",
            err:err.response?.data||err.message
         })
    }
})
app.get("/notification/:id",async(req,res)=>{
    const id=req.params.id;
    try
    {
    const response=await axios.get(`${API}/notifications/${id}`,{headers})
    console.log(response.data)
    return res.json(response.data)
    }
    catch(err)
    {
        console.log(err.message);
         return res.json({
            success:false,
            message:"Failed to retrive",
            err:err.response?.data||err.message
         })
    }
})
app.listen(PORT,()=>(
    console.log(`Server is Running on ${PORT}`)
))