
var mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    order_id: {type: String},
    product_name: {type: String },
    date: { type: Date, default: Date.now }
   
  });
     
var devices = mongoose.model("orders", orderSchema);
module.exports = devices