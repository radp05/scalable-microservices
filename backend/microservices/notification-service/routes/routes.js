const express = require('express');
const producer = require('../controllers/kafka-producer.controller');
const consumer = require('../controllers/kafka-consumer.controller');
const eventSource = require('../helpers/stream');

module.exports = (function () {
  const router = express.Router();

  router.post('/send', producer.saveMessage);
  router.get('/user/:userId', eventSource.sseMiddleware, consumer.messageByUserId);
  router.get('/admin/:userId', eventSource.sseMiddleware,consumer.messageForAdmin);
  router.get('/messages', eventSource.sseMiddleware, consumer.allMessages);

  return router;

})();
