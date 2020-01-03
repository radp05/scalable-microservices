//process.env.NODE_ENV = test
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
const should = chai.should()
const mongoose = require('mongoose');

chai.use(chaiHttp)
let resourceDetails = {}
let groupDetails = {}
let userDetails = {}
describe('Users', function () {
  this.timeout(10000);
  describe('Resources', function () {
    it(' Add new resource and returns a 200 response:', (done) => {
      chai
        .request(server)
        .post("/api/v1/admin/resources")
        .send({ resourceId : "ms-admin" , resourceName: "application Test" + Math.floor(Math.random() * 90 + 10) })
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          resourceDetails = res.body.data
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Update resource info and returns a 200 response:', (done) => {
      chai
        .request(server)
        .patch("/api/v1/admin/resources/" + resourceDetails.resourceId)
        .send({ resourceName: "application Test" + Math.floor(Math.random() * 90 + 10) })
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it("Display all resource Details and returns a 200 response", done => {
      chai
        .request(server)
        .get("/api/v1/admin/resources")
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);

          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Resource details");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Display resource Details and returns a 200 response', (done) => {
      chai
        .request(server)
        .get("/api/v1/admin/resources/" + resourceDetails.resourceId)
        .end((err, res) => {

          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe('Groups', function () {
    it(' Add new group and returns a 200 response:', (done) => {
      chai
        .request(server)
        .post("/api/v1/admin/groups")
        .send({ groupName: "Group Test" + Math.floor(Math.random() * 90 + 10), "resourceIds": [resourceDetails.resourceId] })
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          groupDetails = res.body.data
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Update group info and returns a 200 response:', (done) => {
      chai
        .request(server)
        .patch("/api/v1/admin/groups/" + groupDetails.groupId)
        .send({
          groupName: "Group Test" + Math.floor(Math.random() * 90 + 10), "resourceIds": [resourceDetails.resourceId]
        })
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it("Display all resource Details and returns a 200 response", done => {
      chai
        .request(server)
        .get("/api/v1/admin/groups")
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);

          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("group details");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Display resource Details and returns a 200 response', (done) => {
      chai
        .request(server)
        .get("/api/v1/admin/groups/" + groupDetails.groupId)
        .end((err, res) => {

          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe('Users', function () {
    it(' Add new user and returns a 200 response:', (done) => {
      chai
        .request(server)
        .post("/api/v1/admin/users")
        .send({
          password: "qwerty",
          confirm: "qwerty",
          firstName: "raju",
          lastName: "kumar",
          email: "raj1" + Math.floor(Math.random() * 90 + 10) + "@gmail.com",
          role: "12333",
          groupId: groupDetails.groupId,
          userName: "rkv" + Math.floor(Math.random() * 90 + 10)
        })
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          userDetails = res.body.data

          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Update user info and returns a 200 response:', (done) => {
      chai
        .request(server)
        .patch("/api/v1/admin/users/" + userDetails.userId)
        .send({
          firstName: "raju",
          lastName: "kumar",
          email: "raj1" + Math.floor(Math.random() * 90 + 10) + "@gmail.com",
          userName: "rkv0" + Math.floor(Math.random() * 90 + 10)
        })
        .end((err, res) => {
          if (err)
            res.should.have.status(500);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it("Display all user Details and returns a 200 response", done => {
      chai
        .request(server)
        .get("/api/v1/admin/users")
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);

          res.body.should.be.a("object");
          res.body.should.have.property("status").eql("success");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Display user Details and returns a 200 response', (done) => {
      chai
        .request(server)
        .get("/api/v1/admin/users/" + userDetails.userId)
        .end((err, res) => {

          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("user delete", () => {
    it('Delete user and returns a 200 response', (done) => {
      chai
        .request(server)
        .delete("/api/v1/admin/users/" + userDetails.userId)
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('User Should return 404 respnse', (done) => {
      chai
        .request(server)
        .get("/api/v1/admin/users/" + userDetails.userId)
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  })
  describe("group delete", () => {
    it('Delete group and returns a 200 response', (done) => {
      chai
        .request(server)
        .delete("/api/v1/admin/groups/" + groupDetails.groupId)
        .end((err, res) => {

          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Group Should return 200 respnse', (done) => {
      chai
        .request(server)
        .get("/api/v1/admin/groups/" + groupDetails.groupId)
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("group delete", () => {
    it('Delete group and returns a 200 response', (done) => {
      chai
        .request(server)
        .delete("/api/v1/admin/resources/" + resourceDetails.resourceId)
        .end((err, res) => {

          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(200);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
    it('Resource Should return 404 respnse', (done) => {
      chai
        .request(server)
        .get("/api/v1/admin/resources/" + resourceDetails.resourceId)
        .end((err, res) => {
          if (err)
            res.should.have.status(400);
          else
            res.should.have.status(404);
          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
});
