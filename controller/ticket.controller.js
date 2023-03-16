const TicketService = require("../services/train.services")

const ticketservice = new TicketService()

async function book(req, res, next){
    try{

        const results = await ticketservice.addTrain(req.body)

        return res.status(201).json({
            status: 'success',
            message:'Ticket booked successfully',
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

async function cancel(req, res, next){
    try{

        const results = await ticketservice.cancel(req.params.train_id)

        return res.status(201).json({
            status: 'success',
            message:'ticket deleted successfully',
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
async function change_class(req, res, next){
    try{

        const results = await ticketservice.change_class(req.params.ticket_id, req.body.class)

        return res.status(201).json({
            status: 'success',
            message:'Ticket updated',
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




module.exports = {book,cancel,change_class}