const TicketService = require("../services/ticket.services")
const {book, change_class,cancel} = require("../controller/ticket.controller")

const ticketRouter = require('express').Router()

// ticketRouter.post(`/book`, book)
// ticketRouter.patch(`/change_class/:ticket_id`, change_class)
// ticketRouter.delete(`/cancel/:ticket_id`, cancel)

module.exports = ticketRouter