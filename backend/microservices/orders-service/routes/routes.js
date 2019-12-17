
const orderController = require('../controllers/orders.controller');
const express = require('express');
const jwt = require("jsonwebtoken");
const fs = require('fs');
const SECRET_KEY = fs.readFileSync('./helpers/id_rsa.pub');
//const User = require('../authentication/user.login');

module.exports = (function () {
  var router = express.Router();
  router.get('/login', async(req, res, next) => {
  //  let result = await User.login(req.query.userName, req.query.password);
    let token = jwt.sign({userName:req.query.userName}, SECRET_KEY);
    res.send(token);
    // if (result.Token) { 
    //   res.send(result );
    // } else {
    //   res.send("You are unauthorized");
    // }
  })

  router.post('/createOrder', orderController.placeOrder);
  router.get('/getAllOrders', orderController.getAllOrders);
  router.get('/:orderId', orderController.getOrderDetails);
  router.patch('/updateOrder', orderController.updateOrder);
  router.delete('/delete/:orderId', orderController.deleteOrder)

  return router;

})();










