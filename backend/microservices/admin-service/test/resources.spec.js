

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
  const resource = require("../models/resource.model");
  const server=require('../app');
  chai.use(chaiHttp);
  
  describe("resource", () => {
    // Should send all resources function test
    // it("Should send all resources", async done => {
    //   const req = { params: {} };
    //   const res = {
    //     send: sinon.stub()
    //   };
    //   let resources = getresources(req, res);
    //   if (resources.length == 0) throw new Error("No data");
    //   done();
    // });
  
  
    it("it should GET all the resources", done => {
      chai
        .request(server)
        .get("/api/v1/resources")
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
  
    it("it should CREATE resource", done => {
      chai
        .request(server)
        .post("/api/v1/resources")
        .set("content-type", "application/json")
        .send({
          resourceName: "resource",
        })
        .end((err, res) => {
          if (err) console.error("Error::;;", err);
          res.should.have.status(200);
        //   res.body.should.be.a("object");   
          // res.body.should.have.nested.property('data.status')
          done();
        });
    });
  
    it("it should UPDATE resource by  resourceId", done => {
      chai
        .request(server)
        .patch("/api/v1/resources/5dcd3135bdd37b564072de8d")
        .set("content-type", "application/json")
        .send({
            "resourceName":"hfghfsdhfh",
        })
        .end((err, res) => {
          if (err) console.error("Error", err);
          res.should.have.status(200);
          res.body.should.be.a("object");
          // res.body.should.have.nested.property('data._id')
          done();
        });
    });
  
    it("it should DELETE resource by resourceId", done => {
      chai
        .request(server)
        .delete("/api/v1/resources/5dcd3135bdd37b564072de8d")
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
  
    it("it should GET all the resources", done => {
      chai
        .request(server)
        .get("/api/v1/resources")
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
  