import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import first from "./src/App";

const a= express();
const port=3200;
a.use(bodyParser.urlencoded({extended:true}));
a.get('/',(req,res)=>{
    res.render({first});
})
a.listen(port,()=>{
    console.log(`Runnning in port number ${port}`)  ;
})