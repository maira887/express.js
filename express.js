const express = require( "express")
const app =express()
const PORT = 3000

app.get("/mysite/:name",(req,res) => {res.send(`your good name here:${req.params.name}`)})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ${PORT}`);
})