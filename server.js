import express from "express";


const a= express();
const port=3200;

a.listen(port,()=>{
    console.log(`Runnning in port number ${port}`);
})