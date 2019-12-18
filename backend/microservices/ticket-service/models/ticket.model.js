var mongoose = require('mongoose')

var ticketSchema = mongoose.Schema({
  ticketID: {type:String, unique:true},
  reportedDate: {type:Date, default: Date.now},
  title: {
    type: String,
    required: '{PATH} is required!'
      },
  ticketType: { type:String },
  reportedBy: {type:String},
  application: {type:String},
  version: {type:String,  required: '{PATH} is required!' },
  site: {type:String, default: 'Global'},
  resolutionType: {type:String, default : 'Other'},
  priority: {type:String},
  status: {type:String, default: 'Open'},
  releaseDate: {type:Date, default: Date.now},
  description : {type : String}});

var ticket = mongoose.model('Ticket', ticketSchema);

module.exports = ticket;