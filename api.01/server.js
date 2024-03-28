const express = require('express');

const app = express();//creat an express application 

require('custom-env').env('dev');
const PORT = process.env.PORT;

//creat a route to handle http requests
app.get('/',(req,res)=>{
    return res.send('hello world');
});

app.listen(PORT,(req,res)=>{
    console.log('sever is up and start listning');
})

