const Ticket = require('../models/ticket.model')

exports.insertTicket = async function create(ticketType, title,reportedBy, version,application,site,resolutionType,priority,status,description) {
    try {
        let ticket = new Ticket({
            ticketId:generateIncId(),
            title:title,
            reportedDate: new Date().toString(),
            ticketType: "application",
            reportedBy: "username",
            version:"1.0.0",
            application:"Devices",
            site:"local",
            resolutionType:"Raised",
            priority:"High",
            releaseDate:new Date().toString(),
            status:status,
            description:"Software error"
        });
        let doc = await ticket.save();
        return { "status": 1, "data": doc };
    } catch (error) {
        return { "status": 0, "data": error };
    }
}

var generateIncId = function (){
    var date = new Date();
    var incId = "IM"+date.getFullYear().toString() + date.getDate().toString() + (date.getMonth()+1).toString() +  date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

    return incId;
}

exports.update = async function update(ticketId, resolutionType,description) {
    try {
        const filter = { ticketId: ticketId };
        const update = { resolutionType: resolutionType, description: description};
        let doc = await Device.findOneAndUpdate(filter, update, {
            new: true
        });
        if (doc == null) {
            return { "status": 1, "data": null };
        }
        else {
            return { "status": 1, "data": doc };
        }
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.delete = async function remove(ticketId) {
    try {
        let count = await Ticket.count({ ticketId: ticketId })
        if (count) {
            let doc = await Ticket.findOneAndDelete({ ticketId })
            return { "status": 1, "data": "success" };
        }
        return { "status": 1, "data": null };
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.list = async function list() {
    try {
        let tickets = await Ticket.find({});
        return { "status": 1, "data": ticket }
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}

exports.getRecord = async function getRecord(ticketId) {
    try {
        let devices = await Device.findOne({ ticketId: ticketId });
        return { "status": 1, data: tickets }
    }
    catch (error) {
        return { "status": 0, "data": error };
    }
}