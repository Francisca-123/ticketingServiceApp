if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require('express');
const connectDB = require('./@helpers/db');
const ticketRouter = require('./route/ticket.router');
const trainRouter = require('./route/train.router');

const app = express();

connectDB()

app.use(express.urlencoded({extended:false}));
app.use(express.json());


const api_version = "v1"
app.get(`/${api_version}`, (req, res, next)=>{
    return res.status(200).json({
        status:"success",
        message:"Welcome to our API service"

    })
})

app.use(`/${api_version}/trains`, trainRouter);
app.use(`/${api_version}/tickets`, ticketRouter);


const PORT = process.env.PORT || 3000


app.listen( PORT, ()=>{
    console.log(`Ticket service is running at port ${PORT}` );
})