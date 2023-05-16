let Booking = require("../models/booking");

module.exports.home = function (req, res) {
  return res.send({
    status: "Success",
    message: "Welcome to the world of travelling",
  });
};

module.exports.create = async function (req, res) {
  try {
    await Booking.create(req.body);
    return res.status(200).send({
      status: "Success",
      message: "Your booking is done!",
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      return res.status(400).json({
        status: "Failed",
        message: `Please send all data ${Booking.schema
          .requiredPaths()
          .join(",")}`,
      });
    }
    return res.status(500).json({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};

module.exports.fetchAllBooking = async function (req, res) {
  try {
    const bookings = await Booking.find({});
    return res.status(200).send({
      status: "Success",
      message: "All booking are fetched",
      bookings,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};
