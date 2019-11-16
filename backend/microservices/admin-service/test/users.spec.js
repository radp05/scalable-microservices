
const z = require("babel-register")({
  presets: ["es2015", "stage-2"]
});
require("babel-core/register");
require("babel-polyfill");
const chai = require("chai");
const sinon = require("sinon");
const mongoose=require('mongoose');
const expect = chai.expect;
const chaiHttp = require("chai-http");
let should = chai.should();
const getUsers = require("../services/modelService").getAllUsers;
const User = require("../models/user.model");
const server=require('../app');
chai.use(chaiHttp);

describe("User", () => {
  // Should send all users function test
  it("Should send all users", async done => {
    const req = { params: {} };
    const res = {
      send: sinon.stub()
    };
    let users = getUsers(req, res);
    if (users.length == 0) throw new Error("No data");
    done();
  });


  it("it should GET all the users", done => {
    chai
      .request(server)
      .get("/api/v1/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        //res.body.data.length.should.be.eql(0);
        done();
      });
  });

  it("it should CREATE user", done => {
    chai
      .request(server)
      .post("/api/v1/users")
      .set("content-type", "application/json")
      .send({
        password: "qwerty",
        confirm: "qwerty",
        firstName: "raju",
        lastName: "kumar",
        email: "raj1@gmail.com",
        role: "12333",
        groups: "groupIDDDDd",
        userName: "rkv"
      })
      .end((err, res) => {
        if (err) console.error("Error", err);
        res.should.have.status(200);
        res.body.should.be.a("object");
        // res.body.should.have.nested.property('data.status')
        done();
      });
  });

  it("it should UPDATE user by  userId", done => {
    chai
      .request(server)
      .patch("/api/v1/users/5dcc5c1e686cbd43103b0cca")
      .set("content-type", "application/json")
      .send({
        firstName: "raju",
        lastName: "kumar",
        email: "happy40i@fun.com",
        userName: "rkv0"
      })
      .end((err, res) => {
        if (err) console.error("Error", err);
        res.should.have.status(200);
        res.body.should.be.a("object");
        // res.body.should.have.nested.property('data._id')
        done();
      });
  });

  it("it should DELETE user by userId", done => {
    chai
      .request(server)
      .delete("/api/v1/users/5dcc5c1e686cbd43103b0cca")
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        //   res.body.should.have.property('message').eql('success');
        // res.body.result.should.have.property('ok').eql(1);
        // res.body.result.should.have.property('n').eql(1);
        done();
      });
  });

  it("it should GET all the users", done => {
    chai
      .request(server)
      .get("/api/v1/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  //After all test is done drop database and close connection
  after(done => {
    mongoose.connection.close(done);
    process.exit(0);
  });
});
