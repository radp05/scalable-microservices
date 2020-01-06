const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const adminJson = require('../backend/admin-service/swagger')
const deviceJson = require('../backend/devices-service/swagger')
const ordersJson = require('../backend/orders-service/swagger')
const ticketJson = require('../backend/ticket-service/swagger')
var options = {
    explorer: true,
    swaggerOptions: {
        urls: [
            {
                url: 'http://localhost:8099/admin/swagger.json',
                name: 'Admin'
            },
            {
                url: "http://localhost:8099/device/swagger.json",
                name: 'Device'
            },
            {
                url: 'http://localhost:8099/orders/swagger.json',
                name: 'Orders'
            },
            {
                url: "http://localhost:8099/ticket/swagger.json",
                name: 'Tickets'
            }
        ]
    }
}
app.use(cors());
app.get('/admin/swagger.json', (req, res) => {
    res.send(adminJson)
})
app.get('/device/swagger.json', (req, res) => {
    res.send(deviceJson)
})
app.get('/orders/swagger.json', (req, res) => {
    res.send(ordersJson)
})
app.get('/ticket/swagger.json', (req, res) => {
    res.send(ticketJson)
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
// Run the microservice app
app.listen(8099, () => {
    console.log(`swagger is running in 8099 port`);
});


