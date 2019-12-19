//process.env.NODE_ENV = test
var Devices = require('../models/ticket.model')
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
const should = chai.should()

chai.use(chaiHttp)


describe('Devices', () => {
  beforeEach((done) => {
    Devices.deleteMany({}, (err) => {
      done();
    });
  })
  it('it should GET all the tickets', (done) => {
    chai.request(server)
      .get('/tickets/get')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property("data").eql([])
        done();
      });
  });
  it('it should GET only a single ticket detail', (done) => {
    chai.request(server)
      .get('/tickets/getRecord?123')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property("message").eql("success")
        res.body.should.have.property("data").to.be.null
        done();
      });
  });



  
  describe('/POST tickets', () => {
    it('it should POST a ticket', (done) => {
      chai.request(server)
        .post('/devices/add')
        .send({ deviceName: "cisco1908", deviceType: "router", deviceIp: "172.16.10.101" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.nested.property('data._id')
          done();
        });
    });
  });
});




describe('/GET device', () => {
  it('it should GET all the devices in an non empty database', (done) => {
    chai.request(server)
      .get('/tickets/get')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property("data")
        global.mongo_id = res.body.data[0]._id
        done();
      });
  });
})




describe('/POST ticket', () => {
  it('it should not POST a device without the mandatory fields i.e device_name,device_type and device_ip', (done) => {
    let device = {
      deviceName: "cisco1908",
      deviceType: "switch"
    }
    chai.request(server)
      .post('/tickets/add')
      .send(device)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.nested.property('error.name').eql('ValidationError')
        done();
      });
  })
  it('it should not POST a ticket when the ticket_name is not unique', (done) => {
    let device = {
      deviceName: "cisco1908",
      deviceType: "switch",
      deviceIp: "175.79.45.10"
    }
    chai.request(server)
      .post('/devices/add')
      .send(device)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.should.have.nested.property('error.errmsg')
        res.body.should.have.nested.property('error.code').eql(11000)
        done();
      });
  })
})




describe('/PATCH ticket', () => {
  it('it should UPDATE a ticket with the given ticket _id', (done) => {

    var devices = new Devices({
      deviceName: "cisco1908",
      deviceType: "switchAndhub",
      deviceIp: "175.79.45.10"
    })
    devices.save((err, data) => {
      chai.request(server)
        .patch('/devices/update')
        .send({
          _id: mongo_id,
          deviceName: "cisco1908",
          deviceType: "switchAndhub",
          deviceIp: "175.79.45.10"
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('_id')
          done();
        });
    });
  });
  it('it CANNOT UPDATE a ticket when TICKET _id DOESNT EXIST', (done) => {
    var devices = new Devices({
      deviceName: "cisco_1908",
      deviceType: "switchAndhub",
      deviceIp: "175.79.45.10"
    })
    devices.save((err, data) => {
      chai.request(server)
        .patch('/devices/update')
        .send({
          _id: "5dcc1dae9ded372d34f8bceb",
          deviceName: "cisco_1908",
          deviceType: "switchAndhub",
          deviceIp: "175.79.45.10"
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.nested.property('message').eql('No such device')
          done();
        });
    });
  });
});




describe('/DELETE ticket', () => {
  it('it should DELETE a ticket with the given _id', (done) => {
    chai.request(server)
      .delete('/tickets/delete')
      .send({
        _id: mongo_id,
        deviceName: "cisco 780",
        deviceType: "switch",
        deviceIp: "175.79.45.10"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('success');
        done();
      });
  });
});