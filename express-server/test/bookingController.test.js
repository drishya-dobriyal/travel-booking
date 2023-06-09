const sinon = require("sinon");
const { expect } = require("chai");

const {
  home,
  create,
  fetchAllBooking,
} = require("../controllers/bookingController");
const Booking = require("../models/booking");

describe("bookingController", () => {
  describe("home", () => {
    it("should send a welcome message", () => {
      const res = {
        send: sinon.stub(),
      };

      home({}, res);

      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.deep.equal({
        status: "Success",
        message: "Welcome to the world of travelling",
      });
    });
  });

  describe("create", () => {
    it("should create a booking and send a success message", async () => {
      const req = {
        body: {
          name: "ABD DEF",
          email: "abc@gmail.com",
          place: "India",
          travellors: 2,
          per_person_cost: 10000,
          currency: "USD",
        },
      };

      const createStub = sinon.stub(Booking, "create").resolves();
      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub(),
        json: sinon.stub(),
      };

      await create(req, res);

      expect(createStub.calledOnceWithExactly(req.body)).to.be.true;
      expect(res.status.calledOnceWithExactly(200)).to.be.true;
      expect(
        res.send.calledOnceWithExactly({
          status: "Success",
          message: "Your booking is done!",
        })
      ).to.be.true;

      createStub.restore();
    });

    it("should handle validation error and send a failed message", async () => {
      const req = {
        body: {
          name: "ABC DEF",
        },
      };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
        send: sinon.stub(),
      };

      const createStub = sinon.stub(Booking, "create");

      const validationError = new Error("Validation Error");
      validationError.name = "ValidationError";
      createStub.rejects(validationError);

      await create(req, res);
      expect(res.status.calledOnce).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.firstCall.args[0]).to.deep.equal({
        status: "Failed",
        message: `Please send all data ${Booking.schema
          .requiredPaths()
          .join(",")}`,
      });
      createStub.restore();
    });

    it("should handle internal server error and send a failed message", async () => {
      const req = {
        body: {
          name: "ABD DEF",
          email: "abc@gmail.com",
          place: "India",
          travellors: 2,
          per_person_cost: 10000,
          currency: "USD",
        },
      };

      const internalError = new Error();

      const createStub = sinon.stub(Booking, "create").rejects(internalError);
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await create(req, res);

      expect(createStub.calledOnceWithExactly(req.body)).to.be.true;
      expect(res.status.calledOnceWithExactly(500)).to.be.true;
      expect(
        res.json.calledOnceWithExactly({
          status: "Failed",
          message: "Internal Server Error",
        })
      ).to.be.true;

      createStub.restore();
    });
  });

  describe("fetchAllBooking", () => {
    it("should fetch all bookings and return success response", async () => {
      const fakeBookings = [
        { name: "Booking 1" },
        { name: "Booking 2" },
        { name: "Booking 3" },
      ];

      const findStub = sinon.stub(Booking, "find").resolves(fakeBookings);

      const res = {
        status: sinon.stub().returnsThis(),
        send: sinon.stub(),
      };

      await fetchAllBooking({}, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.args[0][0]).to.deep.equal({
        status: "Success",
        message: "All booking are fetched",
        bookings: fakeBookings,
      });

      findStub.restore();
    });

    it("should handle internal server error and return failed response", async () => {
      const findStub = sinon
        .stub(Booking, "find")
        .throws(new Error("Database error"));

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await fetchAllBooking({}, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.args[0][0]).to.deep.equal({
        status: "Failed",
        message: "Internal Server Error",
      });
      findStub.restore();
    });
  });
});
