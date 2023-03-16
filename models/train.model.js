const mongoose = require('mongoose')

const { Schema } = mongoose;

const TrainSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    train_id:{
        type:String,
        required:true
    },
    routes:{
        type:[{
            journey_date:String,
            departure_station:String,
            arrival_station:String,
            departure_time:Date,
            arrival_time:Date
        }],
        required: true
    },
    ticket_classes:{
        type:[{
            class_name:{
                type:String,
                enum:["BUSINESS", "FIRST"],
            },
            price:Number
        }],

        required:true
    }

});

const trainModel = mongoose.model.train || mongoose.model('trains', TrainSchema)

module.exports = trainModel