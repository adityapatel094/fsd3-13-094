import express from 'express'


const app = express();
// request goes here
app.get("/",(req,res)=>{
    res.send("<h1>Hello EXPRESS</h1>")
})

// always listen at last
app.listen(3333,()=>console.log("prg1 is running at 3333"));