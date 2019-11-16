

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
  const Group = require("../models/group.model");
  const server=require('../app');
  chai.use(chaiHttp);
  
  describe("Group", () => {
    // Should send all groups function test
    // it("Should send all groups", async done => {
    //   const req = { params: {} };
    //   const res = {
    //     send: sinon.stub()
    //   };
    //   let groups = getGroups(req, res);
    //   if (groups.length == 0) throw new Error("No data");
    //   done();
    // });
  
  
    it("it should GET all the groups", done => {
      chai
        .request(server)
        .get("/api/v1/groups")
        .end((err, res) => {
         
           if(err)
          res.should.have.status(400);
          else
          res.should.have.status(200);

          res.body.should.be.a("object");
          //res.body.data.length.should.be.eql(0);
          done();
        });
    });
  
    it("it should CREATE group", done => {
      chai
        .request(server)
        .post("/api/v1/groups")
        .set("content-type", "application/json")
        .send({
          groupName: "group",
          resourceId: "5dce417027c761304491f490"
        })
        .end((err, res) => {
          if (err) console.error("Error::;;", err);
          res.should.have.status(200);
        //   res.body.should.be.a("object");   
          // res.body.should.have.nested.property('data.status')
          done();
        });
    });
  
    it("it should UPDATE group by  groupId", done => {
      chai
        .request(server)
        .patch("/api/v1/groups/5dcd2a9fec0c5520989dd739")
        .set("content-type", "application/json")
        .send({
            "groupName":"hfghfsdhfh",
            "resourceId":"5dcd3135bdd37b564072de8d"
        })
        .end((err, res) => {
          if (err) console.error("Error", err);
          res.should.have.status(200);
          res.body.should.be.a("object");
          // res.body.should.have.nested.property('data._id')
          done();
        });
    });
  
    it("it should DELETE group by groupId", done => {
      chai
        .request(server)
        .delete("/api/v1/groups/5dcd2a9fec0c5520989dd739")
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
  
    it("it should GET all the groups", done => {
      chai
        .request(server)
        .get("/api/v1/groups")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  
    //After all test is done drop database and close connection
    // after(done => {
    //   mongoose.connection.close(done);
    //   process.exit(0);
    // });
  });
  