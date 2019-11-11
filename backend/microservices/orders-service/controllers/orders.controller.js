var ordersModel = require('../models/orders.model');

var ordersControler = {}

ordersControler.placeOrder = async (req, res) => {
    
    try {
        var order = new ordersModel({
            order_id: req.body.orderId,
            product_name: req.body.productName
        });
        let result = await order.save();
       
        return res.status(200).json({
            message: "success",
            data:result
        });
      } catch (error) {
        return res.status(500).json({
          message: "Internal Error",
          error: error
        });
      } 
}

ordersControler.getAllOrders = async (req,res) => {
   
    try {
        let result = await ordersModel.find();
        return res.status(200).json({
            message: "success",
            data:result
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Error",
            error: error
          });
    } 
}

ordersControler.updateOrder = async (req, res) => {
    
    try {
        const filter = { 'order_id': req.body.orderId };
        const update = { product_name: req.body.productName };
        let result = await ordersModel.findOneAndUpdate(filter, update, {
            new: true
        });
        return res.status(200).json({
            message: result
        });
    }catch (error) {
        return res.status(500).json({
            message: "Internal Error",
            error: error
        });
    }
}
ordersControler.deleteOrder = async (req, res) => {
   
    try {
        let orderId = req.params.orderId;
        let result = await ordersModel.findOneAndDelete({ order_id: orderId })
        return res.status(200).json({
            message: "success",
            data:result
          });
    
      } catch (error) {
        return res.status(500).json({
          message: "Internal Error",
          error: error
        });
      }
}

module.exports = ordersControler
