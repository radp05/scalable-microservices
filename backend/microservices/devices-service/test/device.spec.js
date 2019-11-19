//process.env.NODE_ENV = test
var Devices = require('../models/device.model')
let chai = require('chai'),
expect = chai.expect
var helper = require('../helpers/device.helper')

var mainObj ={}


describe('GET no data', () => {
  beforeEach((done) => {
    Devices.deleteMany({}, (err) => {
      done();
    });
  })
  it('returns empty array', async function () {
    let result = await helper.list()
    chai.assert.deepEqual(result.data, [], "empty array since database is empty");
  });
  it('returns null', async function () {
    let result = await helper.getRecord()
    chai.assert.deepEqual(result.data, null, "null since database is empty");
  });
})

describe('/POST ', () => {
  it('returns inserted object', async function () {
    let result = await helper.insertDevice("testDevice","testRouter","172.16.10.27")
    expect(result.data).to.include.property('_id');
    expect(result.data).to.include.property('deviceName');
    expect(result.data).to.include.property('deviceType');
    expect(result.data).to.include.property('deviceIp');
    });
});

describe('GET API WITH DATA', () => {
  it('returns list ', async function () {
    let result = await helper.list()
    expect(result.data[0]).to.include.property('_id');
    expect(result.data[0]).to.include.property('deviceName');
    expect(result.data[0]).to.include.property('deviceType');
    expect(result.data[0]).to.include.property('deviceIp');
    mainObj["_id"] = result.data[0]._id
    });
  it('returns device details', async function () {
    let result = await helper.getRecord(mainObj["_id"])
    expect(result.data).to.include.property('_id');
    expect(result.data).to.include.property('deviceName');
    expect(result.data).to.include.property('deviceType');
    expect(result.data).to.include.property('deviceIp');
  });
})

describe('PATCH',()=>{
  it('updates a given _id',async function(){
    let result = await helper.update(mainObj["_id"],"updatedDevice","switch","192.15.10.1")
    expect(result.data).to.include.property('_id');
    expect(result.data).to.include.property('deviceName');
    expect(result.data).to.include.property('deviceType');
    expect(result.data).to.include.property('deviceIp');
  })
})

describe('DELETE',()=>{
  it('deletes a given _id',async function(){
    let result = await helper.delete(mainObj["_id"])
    expect(result.data).to.eql("success")
  })
  it('delete _id not found',async function(){
    let result = await helper.delete(mainObj["_id"])
    expect(result.data).to.be.a('null')
  })
})



