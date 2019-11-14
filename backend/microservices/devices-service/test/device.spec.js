//process.env.NODE_ENV = test
var Devices = require('../models/device.model')
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = chai.should();
//let expect = chai.expect

chai.use(chaiHttp)
//empties the database
describe('Devices', () => {
  beforeEach((done) => {
    Devices.deleteMany({}, (err) => {
      done();
    });
  })
  describe('/GET devices', () => {
    it('it should GET all the devices', (done) => {
      chai.request(server)
        .get('/devices/get')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  })
});

describe('Devices', () => {
  beforeEach((done) => {
    Devices.deleteMany({}, (err) => {
      done();
    });
  })
  describe('/POST devices', () => {
    it('it should POST a device', (done) => {
      chai.request(server)
        .post('/devices/add')
        // .set('content-type', 'application/json')
        //{"deviceName":"cisco1905","deviceType":"router","deviceIP":"172.16.10.5"}
        .send({ deviceName: "cisco1908", deviceType: "router", deviceIP: "172.16.10.101" })
        .end((err, res) => {

          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.nested.property('data._id')
          done();
        });
    });
  });
});


describe('/POST device', () => {
  it('it should not POST a device without the mandatory fields i.e device_name,device_type and device_ip', (done) => {
    let device = {
      deviceName: "cisco1908",
      deviceType: "switch"
      // deviceIP:"175.79.45.10"
    }
    chai.request(server)
      .post('/devices/add')
      .send(device)
      .end((err, res) => {

        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.nested.property('error.name').eql('ValidationError')
        done();
      });
  })
  it('it should not POST a device when the device_name is not unique', (done) => {
    let device = {
      deviceName: "cisco1908",
      deviceType: "switch",
      deviceIP: "175.79.45.10"
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


describe('/PATCH device', () => {
  it('it should UPDATE a device with the given deviceName', (done) => {
    var devices = new Devices({
      deviceName: "cisco1908",
      deviceType: "switchAndhub",
      deviceIP: "175.79.45.10"
    })
    devices.save((err, data) => {
      chai.request(server)
        .patch('/devices/update')
        .send({
          deviceName: "cisco1908",
          deviceType: "switchAndhub",
          deviceIP: "175.79.45.10"
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('_id')
          done();
        });
    });
  });
  it('it CANNOT UPDATE a device when DEVICE NAME DOESNT EXIST', (done) => {
    var devices = new Devices({
      deviceName: "cisco_1908",
      deviceType: "switchAndhub",
      deviceIP: "175.79.45.10"
    })
    devices.save((err, data) => {
      chai.request(server)
        .patch('/devices/update')
        .send({
          deviceName: "cisco_1908",
          deviceType: "switchAndhub",
          deviceIP: "175.79.45.10"
        })
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('No such device')
          done();
        });
    });
  });
});


describe('/DELETE device', () => {
  it('it should DELETE a device with the given device_name', (done) => {
    //  Devices.save((err, data) => {
    chai.request(server)
      .delete('/devices/delete')
      .send({
        deviceName: "cisco 780",
        deviceType: "switch",
        deviceIP: "175.79.45.10"
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('success');
        // res.body.result.should.have.property('ok').eql(1);
        // res.body.result.should.have.property('n').eql(1);
        done();
      });
    //  });
  });
});

