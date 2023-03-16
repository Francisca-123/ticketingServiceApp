const mongoose = require('mongoose')

const { Schema } = mongoose;

const TicketSchema = new Schema({
    journey_date:{
        type: String,
        require:true
    },
    ticket_number:{
        type: String,
        require:true
    },
    departure_station:{
        type: String,
        require:true
    }, 
    arrival_station:{
        type: String,
        require:true
    }, 
    class:{
        type: String,
        enum:["FIRST", "BUSINESS"],
        require:true
    }, 
    price:{
        type: Number,
        require:true
    }, 
    passenger_name:{
        type: String,
        require:true
    },
    passenger_emil:{
        type: String,
        require:true
    },
    booking_date:{
        type: Date,
        require:true
    },
    updated_at:{
        type: Date,
        require:true,
        default:Date.now()
    },
});

const ticketModel = mongoose.model('train', TicketSchema)

module.exports = ticketModel