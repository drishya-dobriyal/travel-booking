const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  travellers: {
    type: Number,
    required: true,
  },
  per_person_cost: {
    type: Number,
    float: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
