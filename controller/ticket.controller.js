const TicketService = require("../services/train.services")

const ticketservice = new TicketService()

async function book(req, res, next){
    try{

        const {passenger_name, passenger_email, train_id} = req.body
        const results = await ticketservice.addTrain(req.body)

        if(!passenger_name){
            throw new validationException("passenger_name required,")
        }
        if(!passenger_email){
            throw new validationException("passenger_emailrequired,")
        }
        if(!train_id){
            throw new validationException("ticket_id required,")
        }

        return res.status(201).json({
            status: 'success',
            message:'Ticket booked successfully',
            data:results
        })
    }
    catch(error){
       next(error)
    }
}

async function cancel(req, res, next){
    try{
        if(!req.params.ticket_id){
            throw new validationException("Ticket id is required", 400)
        }
        const results = await ticketservice.cancel(req.params.train_id)

        return res.status(201).json({
            status: 'success',
            message:'ticket deleted successfully',
            data:results
        })
    }
    catch(error){
        next(error)
    }
}
async function change_class(req, res, next){
    try{

        if(!req.params.ticket_id){
            throw new validationException("Ticket id is required", 400)
        }
        if(!req.body.class){
            throw new validationException("class to change is required", 400)
        }
        const results = await ticketservice.change_class(req.params.ticket_id, req.body.class)

        return res.status(201).json({
            status: 'success',
            message:'Ticket updated',
            data:results
        })
    }
    catch(error){
       next(error)
    }
}




module.exports = {book,cancel,change_class}