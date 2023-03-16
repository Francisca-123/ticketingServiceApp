const {addTrain, getScheduleForTrain} = require("../controller/train.controller")
const TrainService = require("../services/train.services")
const trainRouter = require('express').Router()


trainRouter.post(`/`, addTrain)
trainRouter.get(`/:train_id/schedule`,getScheduleForTrain)
// trainRouter.get(`/:train_id/seats_availaible`)
module.exports = trainRouter