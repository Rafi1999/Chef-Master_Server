const express= require('express')

const app = express();

app.get("/", (res,req)=>{
    res.json({message: 'Hello'});
});

app.get("/chefData", (res,req)=>{
    res.send({result: 'Hello chef'});
});

app.listen(5000,()=>{

})