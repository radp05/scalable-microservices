//process.env.NODE_ENV = test
let chai = require('chai'),
  expect = chai.expect
var userHelper = require('../helpers/user.helper')
var resourceHelper = require('../helpers/resource.helper')
var groupHelper = require('../helpers/group.helper')
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
    let result = await resourceHelper.insertResource(req)
    resourceDetails = result
    expect(result).to.include.property('_id');
    expect(result).to.include.property('resourceName');
  });
});

describe('GET API WITH RESOURCE DATA', () => {
  it('returns list ', async function () {
    let result = await resourceHelper.getUserResources()
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('resourceName');
  });
  it('returns resource details', async function () {
    let req = {}
    req.params = { "resourceId": resourceDetails.resourceId }
    let result = await resourceHelper.getUserResource(req)
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
    req.params = { "resourceId": resourceDetails.resourceId }

    let result = await resourceHelper.editUserResources(req)
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
      resourceIds: [resourceDetails.resourceId]
    }
    let result = await groupHelper.addUserGroup(req)
    groupDetails = result
    expect(result).to.include.property('_id');
    expect(result).to.include.property('groupName');
    expect(result).to.include.property('resourceIds');
  });
});

describe('GET API WITH GROUPS DATA', () => {
  it('returns list ', async function () {
    let result = await groupHelper.getUserGroups()
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('groupName');
  });
  it('returns group details', async function () {
    let req = {}
    req.params = { "groupId": groupDetails.groupId }
    let result = await groupHelper.getUserGroup(req)
    expect(result[0]).to.include.property('_id');
    expect(result[0]).to.include.property('groupName');
  });
})

describe('UPDATE GROUP DETAILS', () => {
  it('updates Group a given _id', async function () {
    let req = {}
    req['body'] = {
      resourceName: "Group" + Math.floor(Math.random() * 90 + 10),
      resourceIds: [resourceDetails.resourceId]
    }
    req.params = { "groupId": groupDetails.groupId }

    let result = await groupHelper.editUserGroup(req)
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
      groupId: groupDetails.groupId,
      userName: "rkv" + Math.floor(Math.random() * 90 + 10)
    }
    let result = await userHelper.createUsr(doc)
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

    let result = await userHelper.getAllUsers(filter, options);
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

    let result = await userHelper.getUserById(userDetails.userId, options);
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
      groupId: groupDetails.groupId,
      userName: "rkv" + Math.floor(Math.random() * 90 + 10)
    }

    let result = await userHelper.validateUserUpdate(form, userDetails.userId);
    expect(result).to.include.property('nModified');
    expect(result).to.include.property('ok');
  })
})

describe('DELETE USER', () => {
  it('delete User a given _id', async function () {
    let result = await userHelper.deleteUserById(userDetails.userId)
  })
  it('It should give Null if user is already deleted', async function () {
    let result = await userHelper.deleteUserById(userDetails.userId)
    console.log(result)
    expect(result).to.be.a('null')
  })
})
describe('DELETE GROUP', () => {
  it('delete Group a given _id', async function () {
    let req = {}
    req.params = { "groupId": groupDetails.groupId }
    let result = await groupHelper.deleteUserGroup(req)

  })
  it('It should give Null if group is already deleted', async function () {
    let req = {}
    req.params = { "groupId": groupDetails.groupId }
    let result = await groupHelper.deleteUserGroup(req)
    expect(result).to.be.a('null')
  })
})
describe('DELETE RESOURCE', () => {
  it('delete Resource a given _id', async function () {
    let req = {}
    req.params = { "resourceId": resourceDetails.resourceId }
    let result = await resourceHelper.deleteUserResources(req)

  })
  it('It should give Null if resource is already deleted', async function () {
    let req = {}
    req.params = { "resourceId": resourceDetails.resourceId }
    let result = await resourceHelper.deleteUserResources(req)
    expect(result).to.be.a('null')
  })
})

