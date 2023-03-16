const TrainService = require("../services/train.services")

const trainservice = new TrainService()

async function addTrain(req, res, next){
    try{

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