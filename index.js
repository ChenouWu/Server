const express = require('express'); //require keywords to require a modual from express;
const app = express(); //It generates an application;

app.get('/',(req,res)=>{
    res.send("Hi there");
});

const PORT = process.env.PORT;
app.listen(PORT);
