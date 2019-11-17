
const orderController = require('../controllers/orders.controller');
const express = require('express');

module.exports = (function () {
  var router = express.Router();

  router.post('/createOrder', orderController.placeOrder);
  router.get('/getAllOrders', orderController.getAllOrders);
  router.patch('/updateOrder', orderController.updateOrder);
  router.delete('/delete/:orderId', orderController.deleteOrder)

  return router;

})();










