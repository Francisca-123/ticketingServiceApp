const TrainService = require("../services/train.services")
const {validationException} = require("../@helpers/errorhandllers")
const trainservice = new TrainService()

async function addTrain(req, res, next){
    try{

        // validation
        const {name, routes, ticket_classes} = req.body
        if(!name){
            throw new validationException("name required,")
        }
        if(!routes){
            throw new validationException("routes required,")
        }
        if(!ticket_classes){
            throw new validationException("ticket class required,")
        }
        const results = await trainservice.addTrain(req.body)

        return res.status(201).json({
            status: 'success',
            message:'Train added successfully',
            data:results
        })
    }
    catch(error){
        return res.json({
            status:'error',
            message:error.message,
            data:null
        })
    }
}

async function getScheduleForTrain(req, res, next){
    try{

        if (!schedule){
            throw new NotFoundException('train not found')
        }
        if(req.params.train_id){
            throw new validationException("train_id is required to find train schedule")
        }
        const results = await trainservice.getScheduleForTrain(req.params.train_id)

        return res.status(201).json({
            status: 'success',
            message:'Scheduled fetched successfully',
            data:results
        })
    }
    catch(error){
        return res.json({
            status:'error',
            message:error.message,
            data:null
        })
    }
}




module.exports = {addTrain, getScheduleForTrain}