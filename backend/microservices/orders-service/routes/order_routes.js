
const orderController = require('../controllers/orders.controller');

module.exports = function (router) {

  router.post('/order/add', orderController.placeOrder);
  router.get('/order/getAllOrders', orderController.getAllOrders);
  router.patch('/order/update', orderController.updateOrder);
  router.delete('/order/delete/:orderId', orderController.deleteOrder)

  return router;

}













