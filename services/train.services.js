const trainModel = require('../models/train.model')

class TrainService{
    constructor() {}

    async addTrain(payload){


        const{name, routes, ticket_classes} = payload;

        const randomInt1 = Math.floor(Math.random() * 10) + 1
        const randomInt2 = Math.floor(Math.random() * 10) + 1
        const randomInt3 = Math.floor(Math.random() * 10) + 1

        const train_id = `T${randomInt1}${randomInt2}${randomInt3}`

        try{
            const train = new trainModel({
                name,
                train_id,
                ticket_classes,
                routes
            })

            await train.save()
            return train;
        }
        catch(e){
            return e;
        }
    }

    async getScheduleForTrain(train_id){
        try{
    
            const stopsExpressNYBS = [
                {
                    "station":"philadelphia",
                    "arrival":"2023-2-23T09:15:002",
                    "departure_time":"2023-2-23T09:15:002"
                },
                {
                    "station":"ojota",
                    "arrival":"2023-2-23T09:30:002",
                    "departure_time":"2023-2-23T09:15:002"
                }
            ]
    
            const stopsExpress = [
                {
                    "station":"philadelphia",
                    "arrival":"2023-2-23T09:15:002",
                    "departure_time":"2023-2-23T09:15:002"
                },
                {
                    "station":"ojota",
                    "arrival":"2023-2-23T09:30:002",
                    "departure_time":"2023-2-23T09:15:002"
                }
            ]
    
            
            const stopsTrails = [
                {
                    "station":"Ibandon",
                    "arrival":"2023-2-23T09:15:002",
                    "departure_time":"2023-2-23T09:15:002"
                },
                {
                    "station":"ojota",
                    "arrival":"2023-2-23T09:30:002",
                    "departure_time":"2023-2-23T09:15:002"
                }
            ]
            
            let schedule;
            switch(train_id){
                case "T782":
                schedule = stopsExpress
                break
                case "T571":
                schedule = stopsTrails
                break
            }
    
        }
    
    
        catch(error){
            return error
        }
    }
    
}


module.exports = TrainService