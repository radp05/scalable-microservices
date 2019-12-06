//process.env.NODE_ENV = test
let chai = require('chai'),
  expect = chai.expect
var helper = require('../helpers/user.helper')
const CONSTANTS = require('../constant')
const mongoose = require("mongoose");

let resourceDetails = {}, groupDetails = {}, userDetails = {}

/**+++++++++ Resources ++++++++++++++++++++++++ */
describe('Create Resource ', () => {
  it('returns inserted object', async function () {
    let req = {}
    req['body'] = {
      resourceName: "Resource" + Math.floor(Math.random() * 90 + 10)
    }
    let result = await helper.insertResource(req)
    resourceDetails = result
    expect(result).to.include.property('_id');
    expect(result).to.include.property('resourceName');
  });
});

describe('GET API WITH RESOURCE DATA', () => {
  it('returns list ', async function () {
    let result = await helper.getUserResources()
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('resourceName');
  });
  it('returns resource details', async function () {
    let req = {}
    req.params = { "resourceId": resourceDetails._id }
    let result = await helper.getUserResource(req)
    expect(result).to.include.property('_id');
    expect(result).to.include.property('resourceName');
  });
})

describe('UPDATE RESOURCE', () => {
  it('updates Resource a given _id', async function () {
    let req = {}
    req['body'] = {
      resourceName: "Resource" + Math.floor(Math.random() * 90 + 10)
    }
    req.params = { "resourceId": resourceDetails._id }

    let result = await helper.editUserResources(req)
    expect(result).to.include.property('_id');
    expect(result).to.include.property('resourceName');
  })
})

/**+++++++++ Groups ++++++++++++++++++++++++ */

describe('CREATE GROUP ', () => {
  it('returns inserted object', async function () {
    let req = {}
    req['body'] = {
      groupName: "Group" + Math.floor(Math.random() * 90 + 10),
      resourceIds: [resourceDetails._id]
    }
    let result = await helper.addUserGroup(req)
    groupDetails = result
    expect(result).to.include.property('_id');
    expect(result).to.include.property('groupName');
    expect(result).to.include.property('resourceIds');
  });
});

describe('GET API WITH GROUPS DATA', () => {
  it('returns list ', async function () {
    let result = await helper.getUserGroups()
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('groupName');
  });
  it('returns group details', async function () {
    let req = {}
    req.params = { "groupId": groupDetails._id }
    let result = await helper.getUserGroup(req)
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('groupName');
  });
})

describe('UPDATE GROUP DETAILS', () => {
  it('updates Group a given _id', async function () {
    let req = {}
    req['body'] = {
      resourceName: "Group" + Math.floor(Math.random() * 90 + 10),
      resourceIds: [resourceDetails._id]
    }
    req.params = { "groupId": groupDetails._id }

    let result = await helper.editUserGroup(req)
    expect(result).to.include.property('_id');
    expect(result).to.include.property('groupName');
  })
})

/**+++++++++ Users ++++++++++++++++++++++++ */

describe('CREATE USER ', () => {
  it('returns inserted object', async function () {
    let doc = {
      password: "qwerty",
      confirm: "qwerty",
      firstName: "raju",
      lastName: "kumar",
      email: "raj1" + Math.floor(Math.random() * 90 + 10) + "@gmail.com",
      role: "12333",
      groupId: mongoose.Types.ObjectId(groupDetails._id),
      userName: "rkv" + Math.floor(Math.random() * 90 + 10)
    }
    let result = await helper.createUsr(doc)
    userDetails = result
    expect(result).to.include.property('_id');
    expect(result).to.include.property('firstName');
    expect(result).to.include.property('lastName');
    expect(result).to.include.property('userName');
    expect(result).to.include.property('lastName');
    expect(result).to.include.property('email');
  });
});

describe('GET API WITH USERS DATA', () => {
  it('returns list ', async function () {
    let filter = {};
    filter.status = CONSTANTS.ACTIVE_STATUS;
    let options = {};
    options.password = CONSTANTS.NON_RETRIVAL;

    let result = await helper.getAllUsers(filter, options);
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('firstName');
    expect(result[0]).to.include.property('lastName');
    expect(result[0]).to.include.property('userName');
    expect(result[0]).to.include.property('lastName');
    expect(result[0]).to.include.property('email');
  });
  it('returns user details', async function () {
    let options = {};
    options.password = CONSTANTS.NON_RETRIVAL;

    let result = await helper.getUserById(userDetails._id, options);
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('firstName');
    expect(result[0]).to.include.property('lastName');
    expect(result[0]).to.include.property('userName');
    expect(result[0]).to.include.property('lastName');
    expect(result[0]).to.include.property('email');
  });
})

describe('UPDATE USER DETAILS', () => {
  it('updates User details given by userId', async function () {
    let form = {
      password: "qwerty",
      confirm: "qwerty",
      firstName: "raju",
      lastName: "kumar",
      email: "raj1" + Math.floor(Math.random() * 90 + 10) + "@gmail.com",
      role: "12333",
      groupId: mongoose.Types.ObjectId(groupDetails._id),
      userName: "rkv" + Math.floor(Math.random() * 90 + 10)
    }

    let result = await helper.validateUserUpdate(form, userDetails._id);
    expect(result).to.include.property('nModified');
    expect(result).to.include.property('ok');
  })
})

describe('DELETE USER', () => {
  it('delete User a given _id', async function () {
    let result = await helper.deleteUserById(userDetails._id)
  })
  it('It should give Null if group is already deleted', async function () {
    let result = await helper.deleteUserById(userDetails._id)
    expect(result).to.be.a('null')
  })
})
describe('DELETE GROUP', () => {
  it('delete Group a given _id', async function () {
    let req = {}
    req.params = { "groupId": groupDetails._id }
    let result = await helper.deleteUserGroup(req)

  })
  it('It should give Null if group is already deleted', async function () {
    let req = {}
    req.params = { "groupId": groupDetails._id }
    let result = await helper.deleteUserGroup(req)
    expect(result).to.be.a('null')
  })
})
describe('DELETE RESOURCE', () => {
  it('delete Resource a given _id', async function () {
    let req = {}
    req.params = { "resourceId": resourceDetails._id }
    let result = await helper.deleteUserResources(req)

  })
  it('It should give Null if resource is already deleted', async function () {
    let req = {}
    req.params = { "resourceId": resourceDetails._id }
    let result = await helper.deleteUserResources(req)
    expect(result).to.be.a('null')
  })
})

