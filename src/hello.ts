import express from 'express'

const app =express();
const port = 3000;

app.get('/hello',(req,res)=>{
    res.json({'hello': 'woeld'})
})

app.listen(port,()=>{
    console.log(`app strat on port: ${port}`)
})