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
app.use((error, req, res, nexr) => {
    const statusCode = error.statusCode ? error.statusCode : 500;
    const message = error.message;
    if (statusCode === 500){
        message = "An error occured on our server, we have been notified"
    }
    res.status(statusCode).json({
        status:"error",
        message:message,
        error_code: statusCode,
        data:null
    })

    next(error)
})

const PORT = process.env.PORT || 3000


app.listen( PORT, ()=>{
    console.log(`Ticket service is running at port ${PORT}` );
})