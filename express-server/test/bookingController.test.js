const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const app = require("../index");
chai.use(chaiHttp);

describe("bookingController", () => {
  describe("GET /", () => {
    it("should return a welcome message", async () => {
      const res = await chai.request(app).get("/");
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal({
        status: "Success",
        message: "Welcome to the world of travelling",
      });
    });
  });
});
